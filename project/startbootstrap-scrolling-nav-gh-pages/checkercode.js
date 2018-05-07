      function myFunction(form){
        //Get user input
        var TestVar = form.website.value;

        console.log(TestVar);
        
        //Extract domain
        var url = TestVar;
        var hostname;

        if(url.indexOf("://") > -1){
          hostname = url.split('/')[2];
        }
        else{
          hostname = url.split('/')[0];
        }

        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];

        console.log(hostname);

        var domain = hostname
        var splitArr = domain.split('.')
        var arrLen = splitArr.length

        if(arrLen > 2){
          domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];

          if(splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2){
              domain = splitArr[arrLen - 3] + '.' + domain;
          }
        }

        console.log(domain);
        //Loop through data base
        for(var i = 0; i < data.length; i++){
          //Check if in data
          if(data[i].site === domain){
            //Check type and make proper div visible
              if(data[i].type === 'fake news'){
                  document.getElementById('fake').style.visibility= 'visible'
              }
              else if(data[i].type === 'parody'){
                 document.getElementById('parody').style.visibility= 'visible'
              }
              else if(data[i].type === 'imposter'){
                 document.getElementById('imposter').style.visibility= 'visible'
              }
            };
          };
      };