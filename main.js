var min, seg;		min = 40;		seg = 1		
function relogio(){		
    document.getElementById('btn').style.display = 'none';
    if((min > 0) || (seg > 0)){				
        if(seg == 0){					
            seg = 59;					
            min = min - 1	
        }				
        else{					
            seg = seg - 1;				
        }				
        if(min.toString().length == 1){					
            min = "0" + min				
        }				
        if(seg.toString().length == 1){					
            seg = "0" + seg				
        }				
        document.getElementById('spanRelogio').innerHTML = min + ":" + seg		
        setTimeout('relogio()', 1000);			
    }			
    else{				
        document.getElementById('spanRelogio').innerHTML = "00:00" 		
    }		
}	
