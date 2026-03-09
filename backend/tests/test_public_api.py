import os
import uuid
from datetime import datetime

import pytest
import requests
from dotenv import load_dotenv

# Load frontend env to access public backend URL used by UI
load_dotenv('/app/frontend/.env')

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL')


@pytest.fixture(scope="session")
def api_base_url():
    if not BASE_URL:
        pytest.skip("REACT_APP_BACKEND_URL is not set")
    return BASE_URL.rstrip('/')


@pytest.fixture(scope="session")
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


# Basic platform and status endpoints

def test_api_root_ok(api_client, api_base_url):
    response = api_client.get(f"{api_base_url}/api/")
    assert response.status_code == 200
    data = response.json()
    assert data["message"] == "Hello World"


def test_status_create_and_list(api_client, api_base_url):
    payload = {"client_name": f"TEST_cat_house_status_{uuid.uuid4().hex[:8]}"}
    create_response = api_client.post(f"{api_base_url}/api/status", json=payload)

    assert create_response.status_code == 200
    created = create_response.json()
    assert created["client_name"] == payload["client_name"]
    assert isinstance(created["id"], str)
    assert created["id"]
    datetime.fromisoformat(created["timestamp"].replace("Z", "+00:00"))

    list_response = api_client.get(f"{api_base_url}/api/status")
    assert list_response.status_code == 200
    items = list_response.json()
    assert isinstance(items, list)
    assert any(item["id"] == created["id"] for item in items)


# Contact inquiry feature endpoints

def test_contact_inquiry_create_and_get_persistence(api_client, api_base_url):
    unique_suffix = uuid.uuid4().hex[:8]
    payload = {
        "name": f"TEST_User_{unique_suffix}",
        "phone": "+966555123456",
        "message": f"TEST_Inquiry message for grooming and supplies {unique_suffix}",
    }

    create_response = api_client.post(f"{api_base_url}/api/contact-inquiries", json=payload)
    assert create_response.status_code == 200

    created = create_response.json()
    assert created["name"] == payload["name"]
    assert created["phone"] == payload["phone"]
    assert created["message"] == payload["message"]
    assert isinstance(created["id"], str)
    assert created["id"]
    datetime.fromisoformat(created["created_at"].replace("Z", "+00:00"))

    get_response = api_client.get(f"{api_base_url}/api/contact-inquiries")
    assert get_response.status_code == 200
    inquiries = get_response.json()
    assert isinstance(inquiries, list)
    assert len(inquiries) > 0

    matched = next((item for item in inquiries if item["id"] == created["id"]), None)
    assert matched is not None
    assert matched["name"] == payload["name"]
    assert matched["phone"] == payload["phone"]
    assert matched["message"] == payload["message"]
    assert "_id" not in matched


def test_contact_inquiry_validation_error(api_client, api_base_url):
    invalid_payload = {
        "name": "A",
        "phone": "123",
        "message": "short",
    }

    response = api_client.post(f"{api_base_url}/api/contact-inquiries", json=invalid_payload)
    assert response.status_code == 422
    data = response.json()
    assert "detail" in data
    assert isinstance(data["detail"], list)
