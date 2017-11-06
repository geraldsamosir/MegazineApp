import React , {Component} from "react"
import{
    View,
    Image,
    Text,
    WebView
}
from "react-native"



import  {
    rkCardImg,
    rkCardContent,
    rkCardHeader,
    rkCardFooter,
    RkCard,
}
from 'react-native-ui-kitten';




export default class detail extends Component{
    constructor(props){
        super(props)
        
    }

  
    render(){
        return(
            <View>
                 <WebView
                    source={{uri: this.props.url}}
                    style={{width:"100%",height:470}}
                    />
                     
              {/*<RkCard rkType='article'>
                <Image rkCardImg 
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm05bIldI-d6LfvKL9Q-WSWQeePekhbwHSB8D-Uj0_9t8xkz_3'}}
                    />
                <View rkCardHeader>
                    <Text>Header</Text>
                </View>
                <View rkCardContent>
                       
                </View>
                <View rkCardFooter>
                    <Text>Footer</Text>
                </View>
                </RkCard>*/}
            </View>
        )
    }
}