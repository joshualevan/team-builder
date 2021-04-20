import React from 'react';

export default function Form({ team, values }){
    return(

        <div>
            <h1>Dunder Mifflin Team</h1>
            {team.map(
                (teamMember, idx) => {
                    return(
                        <div key = {idx}>
                            <h2>{teamMember.name}</h2>
                            <p><b>{teamMember.role}</b></p>
                            <p><b>e.</b> {teamMember.email}</p>
                        </div>
                    )
                }
            )}
            <form>
                <label htmlFor="">Employee Name</label>
                <input type="text" value="" name="employeeName" onChange= {change} placeholder = "First Last"/>
                <label htmlFor="">email</label>
                <input type="text" value ="" name="email" onChange= {change} placeholder="@dundermifflinpaper.com"/>
            </form>
        </div>
    )
}