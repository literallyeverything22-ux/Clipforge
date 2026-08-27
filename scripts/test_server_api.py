"""Test presets API endpoints."""
import sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from starlette.testclient import TestClient
from server import app

def test_api():
    client = TestClient(app)
    
    # 1. Test /api/presets
    res = client.get("/api/presets")
    assert res.status_code == 200, f"Presets status {res.status_code}"
    data = res.json()
    assert "presets" in data
    assert len(data["presets"]) == 15, f"Expected 15 presets, got {len(data['presets'])}"
    print(f"PASS: /api/presets returned {len(data['presets'])} presets")
    
    # 2. Test /api/presets?category=dynamic
    res = client.get("/api/presets?category=dynamic")
    assert res.status_code == 200
    data = res.json()
    assert len(data["presets"]) == 4, f"Expected 4 dynamic presets, got {len(data['presets'])}"
    print(f"PASS: /api/presets?category=dynamic returned {len(data['presets'])} presets")
    
    # 3. Test /api/presets/karaoke
    res = client.get("/api/presets/karaoke")
    assert res.status_code == 200
    p = res.json()
    assert p["name"] == "Karaoke"
    assert p["captions"]["fontFamily"] == "Montserrat"
    print(f"PASS: /api/presets/karaoke returned correctly")
    
    # 4. Test /api/state includes presets
    res = client.get("/api/state")
    assert res.status_code == 200
    state = res.json()
    assert "presets" in state
    assert len(state["presets"]) == 15
    print("PASS: /api/state contains presets")
    
    print("All server preset API tests passed!")

if __name__ == "__main__":
    test_api()
