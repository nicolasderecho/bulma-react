import * as React from 'react'
import {Content} from "../../index";
import Footer from "./Footer";

export default { title: 'Layout/Footer' }

export const basic = () => {
  return <React.Fragment>
    <Footer>
      <Content centered>
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </Content>
    </Footer>
  </React.Fragment>
}