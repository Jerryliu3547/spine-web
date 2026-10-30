from fastapi.testclient import TestClient
import pytest
from backend.main import app

client = TestClient(app)

def test_health_check_endpoint():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["app"] == "Spine Suite API"
    assert "version" in data
    assert "timestamp" in data

def test_api_health_check_alias():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
