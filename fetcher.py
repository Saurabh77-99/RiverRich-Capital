import requests
import json
import sys

def fetch_price_history_by_interval(symbol, interval, start_time, end_time=None):
    """Fetch large historical data using pagination."""
    url = "https://api.binance.com/api/v3/klines"
    all_klines = []

    while True:
        params = {
            "symbol": symbol,
            "interval": interval,
            "startTime": start_time,
            "limit": 1000,
        }
        if end_time:
            params["endTime"] = end_time

        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        if not data:
            break  # No more data to fetch
        
        all_klines.extend(data)
        start_time = data[-1][0] + 1  # Start time for next request

    return all_klines

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python binance_fetcher.py <symbol> <interval> <start_time> [<end_time>]")
        sys.exit(1)

    symbol = sys.argv[1]
    interval = sys.argv[2]
    start_time = int(sys.argv[3])  # Convert to integer

    end_time = None
    if len(sys.argv) > 4:
        end_time = int(sys.argv[4]) # Convert to integer

    try:
        klines = fetch_price_history_by_interval(symbol, interval, start_time, end_time)
        print(json.dumps(klines, indent=2))  # Pretty print the JSON
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
