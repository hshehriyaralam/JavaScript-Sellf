let insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
    console.log(e.code, e.key, e.keyCode);
    insert.innerHTML = `
    <div class= "color">
       <table class="Shah">
                    <tr class="Shah">
                      <th class="Shah">Key</th>
                      <th class="Shah">Key Code</th>
                      <th class="Shah">Code</th>
                    </tr>
                    <tr class="Shah">
                      <td class="Shah">${e.key}</td>
                      <td class="Shah">${e.keyCode}</td>
                      <td class="Shah">${e.code}</td>
                    </tr>
                  </table>
    
    
    </div>
    `
    
})