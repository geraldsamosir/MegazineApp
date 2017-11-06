import React from 'react';
import { StyleSheet, Text, ScrollView , View , Image} from 'react-native';
import {RkButton ,RkCard, rkCardFooter,rkCardHeader ,rkCardImg , RkTheme} from 'react-native-ui-kitten';

import moment from 'moment';

import {Router} from  "../app"

export default  class newsitem  extends React.Component{
    constructor(props){
         super(props)
    }
    componentDidMount() {
       // console.log(this.props.article)
    }
    _gotodetail(_article){
        
      this.props.navigator.push(
              Router.getRoute('detail',{
                  title :_article.title,
                  url : _article.url
                })
        );
    }
    render(){
        return (
             <RkCard rkType='story'>
                    <Image rkCardImg source={{uri:this.props.article.urlToImage}}/>
                    
                    <View rkCardHeader>
                        <Text>
                            {this.props.article.title}
                            {"\n\n"}
                            {moment(this.props.article.publishedAt).format('DD-MM-YYYY HH:mm:ss')}
                        </Text>
                    </View>
                    
                    <View rkCardContent>
                        <Text> {this.props.article.description}</Text>
                    </View>
                    <View rkCardFooter>
                        <RkButton rkType='info' onPress={this._gotodetail.bind(this,this.props.article)}>Read More</RkButton>
                    </View>
                    </RkCard>
         
        )
    }

}