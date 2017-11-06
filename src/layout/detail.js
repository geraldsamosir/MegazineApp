import React from 'react';

import { 
    StyleSheet, 
    Text, 
    ScrollView , 
    View} 
from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

//component
import Content  from  "../component/detailnews"

export default class detail extends React.Component{
     static route = {
        navigationBar: {
            title(params){
                return params.title
            }
        }
    }

    constructor(props){
        super(props)
        this.state = {
            visible :true
        }

    }

    componentDidMount() {
        this._loading()
    }

    _loading(){ 
        this.setState({
            visible : true
        })
        setInterval(() => {
            this.setState({
                visible: !this.state.visible
            });
        }, 5000);
    }


    

      callMeLatter() {
         this.props.navigator.updateCurrentRouteParams(this.props.route.params.title)
      }


    render(){
        return(
           <ScrollView>
             <Content url={this.props.route.params.url}/>
             <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
            </ScrollView>
        )
    }
}

