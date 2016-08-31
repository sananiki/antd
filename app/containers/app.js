import React from 'react';
import Header from '../components/header';
import Lists   from '../components/list';
import Footer  from '../components/footer';

export default class App extends React.Component {
     render() {
         return (
             <div>
                 <Header/>
                 <Lists />
                 <Footer />
             </div>
         )
     }
}