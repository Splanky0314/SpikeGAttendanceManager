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

@app.get("/create_attendance_code")
def create_attendance_code():
    create_attcode()
    return {"success":"true", "message":"Please check the spread sheet to verify if the Attendance Code has been generated successfully."}

def create_randomstr(length = 5):
    characters = string.ascii_uppercase + string.digits
    attcode = ''.join(random.choices(characters, k=length))
    return attcode

def create_attcode():
    i = 4
    while True :
        i += 1
        # 연습 일정이 존재하고
        if ws_schedule.acell('A'+str(i)).value:
            print(ws_schedule.acell('A'+str(i)).value)
            # 이미 출결코드가 생성되어 있다면
            if ws_schedule.acell('B'+str(i)).value:
                continue
            # 출결코드가 생성되지 않았다면
            else:
                ws_schedule.update_acell('B'+str(i), create_randomstr())
                ws_schedule.update_acell('C'+str(i), create_randomstr())
        else:
            break

@app.post("/check_stdnumber")
def check_stdnumber():
    pass

@app.post("/check_attcode")
def check_attcode():
    pass