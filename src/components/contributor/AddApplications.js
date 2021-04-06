import React, {Component} from 'react';
import "./addApplications.css"
import axios from 'axios';

class AddApplication extends Component{
    constructor(props) {
        super(props);
        this.state = {
            applicationName:"",
            methodName:"",
            displayFile:false,
            imagePreviewUrl: '',
            file:"",
            addIconStatus:false,
            addMethodStatus:false,
            addMethodStatus1:false,
            methodExists:false,
            applicationId:"",
            addStepStatus:false,
            displaAdddStatus:false,
            methodId:"",
            stepNumber:"",
            stepDescription:"",
        }
    }
    handleChange=(event)=>
    {
        this.setState({ [event.target.name]: event.target.value });
    }
    ApplicationCheck=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('file',this.state.file);
        formData.append('applicationName',this.state.applicationName)
        axios.post("/application/add",formData)
        .then((response) => {
            console.log(response.data);
            if(response.data.id!=null){
                this.setState({addIconStatus:true,addMethodStatus:true,applicationId:response.data.id,file:""});
            }
            else if(response.data.msg=="Application already exists"){
                this.setState({addIconStatus:true,
                    methodExists:true,
                    applicationId:response.data.appid,
                    file:""})
            }
            
           
          })
          .catch(function (err) {
            console.log(err);
          });

    }
    MethodCheck=(e)=>{
      e.preventDefault();
     
      var methodData={
          applicationId:this.state.applicationId,
          methodName:this.state.methodName
      }
      axios.post("/method/add",methodData)
      .then((response)=>{
          console.log(response.data);
          if(response.data.msg=="method added"){
                 this.setState({addStepStatus:true,addMethodStatus1:false,methodId:response.data.methodId});
          }
          if(response.data.msg=="Method Already Exists"){
              console.log("hiiii")
              this.setState({addMethodStatus1:true})
          }
      }).catch(function (err) {
            console.log(err);
          });



    }

    displayAddStatus=(e)=>{
        e.preventDefault();
        this.setState({addMethodStatus:false,displaAdddStatus:true,addStepStatus:false});
    }
    nextStep=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('file',this.state.file);
        formData.append('stepNumber',this.state.stepNumber)
        formData.append('stepDescription',this.state.stepDescription)
        formData.append('methodId',this.state.methodId)

        

        
        axios.post('/step/add',formData).then((response)=>{
            if(response.data.msg=="step added"){
                this.setState({
                    stepNumber:"",
                    stepDescription:"",
                    methodId:"",
                })

            }

        })
    }


    finishStep=(e)=>{
        e.preventDefault();
        this.props.history.push("/contributor")
    }

    AddMethod=(e)=>{
     e.preventDefault()
    this.setState({addMethodStatus:true,methodExists:false});
}

    BackToHome=(e)=>{
        this.setState({addIconStatus:false,
            addMethodStatus:false,
            methodExists:false,})
    }

    handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        if(e.target.files[0]){
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({file: file, imagePreviewUrl:reader.result});
        }
        reader.readAsDataURL(file)
        this.setState({displayFile:true});
    }
    }

    render(){
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return(
            <div>
                {this.state.addIconStatus==false&& <div className="addApplication-container">
            <div className="icon-name-container">
                    <label>App Name</label>
                    <input className="app-name-textbox" type="text" name = "applicationName" value={this.state.applicationName} onChange={this.handleChange}></input>
             </div>

            <div>
              <div >
               <input type="file" required id="order-choose-file" name="file" onChange={this.handleImageChange} />

                       <div className="icon-container">
                       {this.state.displayFile && <div className="imgPreview">{$imagePreview}</div>}
                       </div>
               </div>


               
          </div>
          <input type="button" value="Submit" className="button1" onClick={this.ApplicationCheck}/></div>}
          {this.state.methodExists==true&&<div> 
        <p>Application already exists.Do you want to add  methods?</p>
         <input type="button" value="Yes" className="button1" onClick={this.AddMethod}/>
         <input type="button" value="No" className="button1" onClick={this.BackToHome}/>
         </div>}
     {this.state.addMethodStatus==true&&<div className="addApplication-container"> 
         <label>Method Name</label>
         <input type="text" className="method-name-textbox" name = "methodName" value={this.state.methodName} onChange={this.handleChange}/>
         <input type="button" value="Submit" className="button1" onClick={this.MethodCheck}/>
         </div>
         }
         {this.state.addMethodStatus1==true&&<div>
             <p>Method Already Exists</p>
         </div>}
         {this.state.addStepStatus==true && <div>
            <input type="button" value="Add Step" className="button1" onClick={this.displayAddStatus}/>
             </div>}
             {this.state.displaAdddStatus==true && <div className="addApplication-container">
                 
                
                <label>Step Number</label>
         <input type="text" className="method-name-textbox" name = "stepNumber" value={this.state.stepNumber} onChange={this.handleChange}/>
                  
         <label>Step Description</label>
         <input type="text" className="method-name-textbox" name = "stepDescription" value={this.state.stepDescription} onChange={this.handleChange}/>    
         <div >
               <input type="file" required id="order-choose-file" name="file" onChange={this.handleImageChange} />

                       <div className="icon-container">
                       {this.state.displayFile && <div className="imgPreview">{$imagePreview}</div>}
                       </div>
               </div> 
               <input type="button" value="Next" className="button1" onClick={this.nextStep}/>
               <input type="button" value="Finish" className="button1" onClick={this.finishStep}/>

                    
                 </div>}
     </div>
            
           
        )
    }
} export default AddApplication;