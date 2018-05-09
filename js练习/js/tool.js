		       
           function animation(obj,opation,isLinear,fnEnd){
		    		clearInterval(obj.timer);
		    		var iSpeed=0;
                         //都执行完了 结束
                         //如果有没有执行完的 不结束
		    		obj.timer=setInterval(function(){

		    			var isStopAll=true;

		 for(attr in opation){


		    			var curr=parseFloat(getComputedStyle(obj,false)[attr]); 
		    			var isStop=false;
		    			if(attr=='opacity'){
		    				curr=Math.round(curr*100);  
		    			} 
		    			
		    			if(isLinear){
		    					     if(curr>opation[attr]){
          			                 iSpeed=-20;
          		                  }else{
          			                iSpeed=20;
          		                 }
                        	if(Math.abs(opation[attr]-curr)<=Math.abs(iSpeed)){
                        		isStop=true;
                        	}else{
                                     isStopAll=false;
                        	}


		    			}else{
		    				   iSpeed=(opation[attr]-curr)/10;
		    			       iSpeed=iSpeed>0 ? Math.ceil(iSpeed):Math.floor(iSpeed);/*三木运算符*/
		    			          if(!iSpeed){
                        		  isStop=true
                        	     }else{
                        	     	isStopAll=false;
                        	     }
		    			  }  

                       if(isStop){
                       	clearInterval(obj.timer)
                       	if(isLinear){
                           if(attr=='opacity'){
          				obj.style[attr]=(curr+iSpeed)/100;
          			     }else{
          			   obj.style[attr]=curr+iSpeed+'px';
          			     }	
                       	}
                       
                       if(fnEnd){
                         	fnEnd()
                         }

                       }else{
                       	if(attr=='opacity'){
                       	obj.style[attr]=(curr+iSpeed)/100;
                       }else{
                       		obj.style[attr]=curr+iSpeed+'px';
                       }
                      }
             }
		    		},30);
		          }