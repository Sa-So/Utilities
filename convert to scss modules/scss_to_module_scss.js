const fs =  require('fs');
fs.readFile("input_scss.tsx", (err, data) => {
   if (err) throw err;
   let inp = data.toString();
	let ar = inp.split('\n');
	
	for(let i in ar){
		let j = ar[i].split(' ');
		if(j[0]==='import' && ar[i].search('.scss')!=-1){
			//ar[i]=ar[i].replace()
			j[0]='import styles from';
			j[1]=j[1].replace('.scss','.module.scss')
			ar[i]=j.join(' ')
		}
		let loc = ar[i].search('className');
		// 1st case : multiple classes have been given to that div
		// 2nd case : single class.
		// use template strings even for 1 class.
		let dq = ar[i].search('\"'); 
		if(loc!=-1 && dq!=-1){
			let arr2 = ar[i].split('\"') // 3 parts   xxx  "cname" xxx
			let pos = 1;
			
			for( let l in arr2){
				if(arr2[l].includes('className')){
					pos=Number(l)+1;
					console.log("pos",Number(l)+1);
					break;
				}
			}
			
			// cname
			//console.log(arr2);
			
			arr2[pos]=arr2[pos].replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
			// cnames array
			let camelArray = arr2[pos].split(' ')
			
			console.log(camelArray);
			let carraymap;
			if(camelArray.length>=2){
				  carraymap = camelArray.map((cname)=>{return ("${styles."+cname+"}")});
						arr2[pos] = carraymap.join(' ')                                
 	    	         arr2[pos]='{\`'+arr2[pos]+'\`}';                               
			}
			else{
				carraymap = camelArray.map((cname)=>{return "styles."+cname});
				arr2[pos]=carraymap.join(' ');
				arr2[pos]='{'+arr2[pos]+'}';
			}
			let ar1 = "";
			for ( let j2 in arr2){
		    	ar1 += arr2[j2];
				if(!(j2==pos-1 || j2==pos || j2==arr2.length-1)){
					ar1+='\"'; 	
				}
			}
			ar[i]=ar1;	
			
		}
	}

	output = ar.join('\n');	
	//console.log(output);
	fs.writeFile("output_scss.tsx", output, (err) => {
  		if (err)
    		console.log(err);
  		else {
    		console.log("File written successfully\n");
    		//console.log("The written has the following contents:");
    		//console.log(fs.readFileSync("books.txt", "utf8"));
  		}
	});

	/*for(let i=0;i<inp.length;i++){
		console.log(inp.charAt(i));
	}
	*/
   //console.log(data);
   //console.log(data.toString());
   //console.log(data);	
});
