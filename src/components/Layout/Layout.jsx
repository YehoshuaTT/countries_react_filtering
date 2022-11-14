import React from "react";
import Header from "../Header/Header"
import Main from "../Main/Main"
import Countries from "../Countries/Countries";

function Layout(props) {

      const [country, setCtry] = React.useState(Countries);

      const inp = (e) => setCtry(Countries.filter((v) => v.name.common.toLowerCase().includes(e.target.value.toLowerCase())))

      return (
            <div>
                  <Header country={country} inp={inp} />
                  <Main country={country} />
            </div>
      )
}

export default Layout