import React from 'react'

export default function NewComponent() {
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
    fetch('/getUsers')
      .then((res) => {
        return res.json()
    })
      .then((data) => setData(data.users))
  }, []);

  return (
    <div>
        {data && data.map(item => {
            return <div>
                <h2>{item.User}</h2>
                <h3>{item.Age}</h3>
                <p style={{"fontWeight":"bold"}}>{item.LookingFor}</p>
                <p>{item.Message}</p>
                <div style={{"width": "100%", "height": "1px", "backgroundColor":"black"}}></div>
            </div>
        })}
    </div>
  )
}
