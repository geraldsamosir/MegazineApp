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


export default class listsports extends React.Component{
     static route = {
        navigationBar: {
            title(params){
                return params.title.toUpperCase();
            }
        }
    }

    constructor(props){
        super(props)
        this.state = {
            visible :true,
            _news :  []
        } 
    }

    componentDidMount() {
        this._getdata();
        
    }


    async  _getdata(){
        let result =  await articleAction.getbycategory(this.props.route.params.title)
        if(result.articles != ""){
            this.setState({
                visible :false,
                _news : result.articles
            })
        }
    }



    callMeLatter() {
        this.props.navigator.updateCurrentRouteParams(this.props.route.params.title)
    }

    render(){
     
      let newscomponent  =  this.state._news.map((data,index)=>{
          return <View key={index} >
                    <Newsitem article={data} navigator={this.props.navigator} />
                </View>
                
      })

        return(
           <ScrollView>
             {newscomponent}
              <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
            </ScrollView>
        )
    }
}

