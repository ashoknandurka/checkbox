import React, { useState } from 'react';

const Demo = () => {

    
    const dataOfLeadsArray = [
        {
            "fieldNameOrPath": "Name",
            "type": "string",
            "value": "Bertha Boxer",
            isChecked: false
        },
        {
            "fieldNameOrPath": "Company",
            "type": "string",
            "value": "Farmers Coop. of Florida",
            isChecked: false
        },
        {
            "fieldNameOrPath": "State",
            "type": "string",
            "value": "FL",
            isChecked: false
        },
        {
            "fieldNameOrPath": "Email",
            "type": "email",
            "value": "bertha@fcof.net",
            isChecked: false
        },
        {
            "fieldNameOrPath": "Status",
            "type": "email",
            "value": "Working - Contacted",
            isChecked: false
        },
        {
            "fieldNameOrPath": "CreatedDate",
            "type": "email",
            "value": "Sun Mar 20 02:31:30 GMT 2022",
            isChecked: false
        },
        {
            "fieldNameOrPath": "Owner.NameOrAlias",
            "type": "email",
            "value": "vGunt",
            isChecked: false
        },
        {
            "fieldNameOrPath": "IsUnreadByOwner",
            "type": "id",
            "value": "true",
            isChecked: false
        },
        {
            "fieldNameOrPath": "Id",
            "type": "id",
            "value": "00Q5j000008plQ5EAI",
            isChecked: false
        },
        {
            "fieldNameOrPath": "LastModifiedDate",
            "type": "boolean",
            "value": "Sun Mar 20 02:31:30 GMT 2022",
            isChecked: false
        },
        {
            "fieldNameOrPath": "SystemModstamp",
            "type": "boolean",
            "value": "Mon Mar 21 09:12:35 GMT 2022",
            isChecked: false
        },
        {
            "fieldNameOrPath": "Owner.Id",
            "type": "boolean",
            "value": "0055j000005yrWlAAI",
            isChecked: false
        },
        {
            "fieldNameOrPath": "OwnerId",
            "type": "boolean",
            "value": "0055j000005yrWlAAI",
            isChecked: false
        }
    ]

    const [dataOfLeads,setDataOfLeads] = useState(dataOfLeadsArray);
    const [isAllSelected,setIsAllSelected] = useState(false);
    
    const handleChange = (event,item)=>{
        let dataLeads =[...dataOfLeads]
        dataLeads.forEach((i)=>{
            if(i.fieldNameOrPath === item.fieldNameOrPath){
                i.isChecked = event.target.checked
            }
        })
        setDataOfLeads(dataLeads)
        dataLeads.length === dataLeads.filter((i)=>i.isChecked).length ?
         setIsAllSelected(true) : setIsAllSelected(false)
    }

    const handleChangeAll =(event)=>{
        let dataLeads = [...dataOfLeads]
        dataLeads.forEach((i)=>{
            i.isChecked = event.target.checked;
        })
        setDataOfLeads(dataLeads)
        event.target.checked ? setIsAllSelected(true) : setIsAllSelected(false)
    }


    return (
        <div>
        <h1>this is from demo component</h1>
        <div className="table-responsive">
			<table className="table table-row-bordered table-row-gray-100 col-lg-12 gs-0 gy-3">
				<thead>
				 <tr className="fw-bolder text-muted">
                     <th className="col-lg-2">
                     <div className="d-flex align-items-center form-check form-check-sm form-check-custom form-check-solid">
                       <input className="form-check-input widget-13-check" 
                         type="checkbox"
                         onChange={(e)=>handleChangeAll(e)}
                         checked={isAllSelected}
                         style={{width:'1.5rem',height:'1.5rem'}}
                        />
                     </div>
                     </th>
				 		<th className="col-lg-3 text-dark text-bolder">Field</th>
				 		<th className="col-lg-3 text-dark text-bolder">Data Type</th>
				 		<th className="col-lg-4 text-dark text-bolder">Example</th>
				 	</tr>
				</thead>
				  <tbody>
                    {dataOfLeads.map(eachItem => 
                    <tr>
                      <td className="col-lg-2">
				  		<div className="d-flex align-items-center form-check form-check-sm form-check-custom form-check-solid">
				  			<input className="form-check-input widget-13-check"
                              onChange={(e)=>handleChange(e, eachItem)} 
                               type="checkbox"
                               checked ={eachItem.isChecked}
                               />
				  		</div>
				  	</td>
                      <td className="col-lg-3">
				  		<span className="d-block mb-1 fs-6">{eachItem.fieldNameOrPath}</span>
				  	</td>
                      <td className="col-lg-3">
				  		<span className="d-block mb-1 fs-6">{eachItem.type}</span>
				  	</td>
                      <td className="col-lg-4">
				  		<span className="d-block mb-1 fs-6">{eachItem.value}</span>
				  	</td>
                    </tr>)}
				  </tbody>
			</table>
		  </div>
        </div>
    );
};

export default Demo;