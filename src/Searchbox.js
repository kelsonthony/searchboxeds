import React, { useState } from "react";



const handleClick = () => {
    console.log('Click here! ')
}

const handleSubmit = (event) => {
    console.log('event', event)
}

//action="localhost" target="_blank"
function Searchbox() {
    //const [myValue, setValue] = useState(0)
    
    
return (
    
    <div>
    <form method="get" action="//search.ebscohost.com/login.aspx" target="_blank" onSubmit={handleSubmit} >
        <p>Test EDS Searchbox</p>
        <input type="hidden" name="search_prefix" value="" />
        <input type="hidden" name="direct" value="true" />
        <input type="hidden" name="scope" value="site" />
        <input type="hidden" name="site" value="eds-live" />
        <input type="hidden" name="profile" value="eds" />
        <input type="hidden" name="authtype" value="ip,guest" />
        <input type="hidden" name="custid" value="s6389449" />
        <input type="hidden" name="groupid" value="main" />
        <input type="hidden" name="cli0" value="FT1" />
        <input type="hidden" name="clv0" value="Y" />
        <input type="hidden" name="cli1" value="RV" />
        <input type="hidden" name="clv1" value="N" />
        <input type="text" name="bquery"  />
        <input type="submit" value="Enviar" onClick={handleClick} />
        
    </form>
    </div>
);
}

export default Searchbox;
