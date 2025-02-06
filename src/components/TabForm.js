import { useState } from 'react'
import Interests from './Interests'
import Profile from './Profile'
import Settings from './Settings'

const TabForm = () => {
  const [data, setData] = useState({
    name: 'Vithika',
    age: 29,
    email: 'vgvithika@gmail.com',
    interests: ['coding', 'music'],
    theme: 'dark',
  })
  const [activeTab, setActiveTab] = useState(0)
  const [errors, setError] = useState({})
  const Tabs = [
    {
      name: 'Personal Information',
      component: Profile,
      validate: () => {
        const err = {}
        if (!data.name || data.name < 2) {
          err.name = 'Name is not valid'
        }
        if (!data.age || data.age < 18) {
          err.age = 'Age is not valid'
        }
        if (!data.email || data.email < 2) {
          err.email = 'Email is not valid'
        }
        setError(err)
        return err.name || err.age || err.email ? false : true
      },
    },

    {
      name: 'Interests',
      component: Interests,
      validate: () => {
        const err = {}
        if (data.interests.length < 1) {
          err.interests = 'select at least one interest'
        }
        setError(err)
        return err.interests ? false : true
      },
    },
    {
      name: 'Settings',
      component: Settings,
      validate: () => {
        return true
      },
    },
  ]
  const ActiveFormComponent = Tabs[activeTab].component

  const handlePrevClick = () => {
    {
      if (Tabs[activeTab].validate()) {
        setActiveTab((prev) => prev - 1)
      }
    }
  }
  const handleNextClick = () => {
    if (Tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1)
    }
  }
  const handleSubmit = () => {
    console.log(data)
  }
  return (
    <div>
      <div className="heading-container">
        {Tabs.map((t, index) => (
          <div
            key={index}
            className={"heading "+  (activeTab==index ? "active":"")}
            onClick={() => {
              if (Tabs[activeTab].validate()) setActiveTab(index)
            }}
          >
          {activeTab===index ?"✅" :"☑️"} {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveFormComponent data={data} setData={setData} errors={errors} activeTab= {activeTab} />
      </div>
      <div className="btns">
        {activeTab > 0 && (
          <button style={{ margin: 10 }} onClick={handlePrevClick}>
            PREV
          </button>
        )}
        {activeTab < Tabs.length - 1 && (
          <button onClick={handleNextClick} style={{ margin: 10 }}>
            NEXT
          </button>
        )}
        {activeTab === Tabs.length - 1 && (
          <button onClick={handleSubmit}>SUBMIT</button>
        )}
      </div>
    </div>
  )
}
export default TabForm
