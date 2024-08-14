from fastapi import FastAPI

import random
import string

from oauth2client.service_account import ServiceAccountCredentials
import gspread

# google cloud setup
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]

json_key_path = "spikegattendancechecker-eefae72f8328.json"

credential = ServiceAccountCredentials.from_json_keyfile_name(json_key_path, scope)
gc = gspread.authorize(credential)

spreadsheet_url = "https://docs.google.com/spreadsheets/d/1u5Uy9p4jN-QecSMH0N4n7vZF-3xr0wT6cc2OKH0dGzM"

doc = gc.open_by_url(spreadsheet_url)

# load each sheet 
ws_schedule = doc.worksheet("schedule")
ws_man = doc.worksheet("man")
ws_woman = doc.worksheet("woman")

# fastapi
app = FastAPI()

@app.get("/")
def test():
    pass
