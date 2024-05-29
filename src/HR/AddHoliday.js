import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import '../Allcss/AddHoliday.css'
import axios from 'axios'


const AddHoliday = () => {
  const [holidayMonth, setholidayMonth] = useState("")
  const [holidayYear, setholidayYear] = useState("")
  const [holidayDay, setholidayDay] = useState("")
  const [holidayEvent, setholidayEvent] = useState("")

  const addHoliday = async () => {
    const holidayData = {
      HolidayMonth: holidayMonth,
      HolidayYear: holidayYear,
      HolidayDay: holidayDay,
      HolidayEvent: holidayEvent
    }
    try {
      const result = await axios.post("http://localhost:5000/leavemanagementapi/addholiday", holidayData)
      console.log("data", result.data);
      alert("Holiday Added Successfully")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='addholiday-Container' style={{ marginTop: '80px' }}>
      <div className='addholiday-Form'>
        <Form>
          <h2>Add Holiday </h2>
          <Row>
            <Col>
              <div className='addholiday-div'>
                <label>Holiday Month :-</label>
              </div>
              <div>
                <input
                  className='addholiday-input'
                  type='text'
                  placeholder='Enter Holiday Month'
                  onChange={(e) => setholidayMonth(e.target.value)}
                />
              </div>
            </Col>

            <Col>
              <div className='addholiday-div'>
                <label>Holiday Year :-</label>
              </div>
              <div>
                <input
                  className='addholiday-input'
                  type='text'
                  placeholder='Enter Holiday Year'
                  onChange={(e) => setholidayYear(e.target.value)}
                />
              </div>
            </Col>

          </Row>

          <Row>
            <Col>
              <div className='addholiday-div'>
                <label>Holiday Day :-</label>
              </div>
              <div>
                <input
                  className='addholiday-input'
                  type='date'
                  placeholder='Enter Holiday Day'
                  onChange={(e) => setholidayDay(e.target.value)}
                />
              </div>
            </Col>

            <Col>
              <div className='addholiday-div'>
                <label>Holiday Event :-</label>
              </div>
              <div>
                <input
                  className='addholiday-input'
                  type='text'
                  placeholder='Enter Holiday Event'
                  onChange={(e) => setholidayEvent(e.target.value)}
                />
              </div>
            </Col>

          </Row>

          <button className='addholiday-button' onClick={() => addHoliday()}>ADD</button>
        </Form>
      </div>
    </div>
  )
}

export default AddHoliday