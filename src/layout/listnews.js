import React from 'react';


import Spinner from 'react-native-loading-spinner-overlay';

import { 
    StyleSheet, 
    Text, 
    ScrollView , 
    View} 
from 'react-native';

import Newsitem  from  "../component/newsitem"


import articleAction from "../action/article"



export default class listnews extends React.Component{
     static route = {
        navigationBar: {
           title: 'MEGAZINE APP'
        }
    }

    constructor(props){
        super(props)
        this.state = {
            _news :  [],
            visible : true,
        } 
    }

    componentDidMount() {
        this._getdata()
    }

    

  

   
    async _getdata(){
        let result =  await articleAction.gettop()
         
         result = result.map((data)=>{
                return data.data.articles
         })
        
         result =  [].concat.apply([],result)
        if(result != ""){
            this.setState({
                visible :false,
                _news :  result
            })
        }
    }

    render(){
      let newscomponent  =  this.state._news.map((data,index)=>{
          return <View key={index} >
                    <Newsitem  article={data} navigator={this.props.navigator} />
                  </View>
                
      })

    
        return(
           <ScrollView>
            {newscomponent}
                <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF' }} />
            </ScrollView>

        )
    }
}

