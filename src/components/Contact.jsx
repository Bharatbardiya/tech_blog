import React from 'react'

const Contect = () => {
  return (
      <div className="contact">
        <main>
          <h1>Contact Us</h1>

          <form >
            <div>
              <label>Name</label>
              <input type="text" required placeholder='Darth Vader'/>
            </div>
            <div>
              <label>Email</label>
              <input type="email" required placeholder='DarthVader@gmail.com'/>
            </div>
            <div>
              <label>Message</label>
              <input type="text" required placeholder='write about your Query...'/>
            </div>
            <button type='submit'>Send</button>
          </form>
        </main>
      </div>
  )
}

export default Contect