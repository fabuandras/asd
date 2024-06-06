export function kartyaOsszeallit(lista) {
  let txt = `<div class="container"><div class="row">`;
  lista.forEach((element) => {
    txt += `
      <div class="col-md-4 mb-4">
        <div class="card rounded-4" style="width:400px">
          <div class="card-body">
            <h4 class="kerdes card-title text-left mb-4">${element.kerdes}</h4>
                <div class="text-center">
                    <button type="button" class="class="helyes_valasz rounded-2 card-text text-center" style="width:200px">${element.helyes_valasz}</button>
                </div>
                <div class="text-center">
                    <button type="button" class="class="helyes_valasz rounded-2 card-text text-center" style="width:200px">${element.valasz1}</button>
                </div>
                <div class="text-center">
                    <button type="button" class="class="helyes_valasz rounded-2 card-text text-center" style="width:200px">${element.valasz2}</button>
                </div>
                <div class="text-center">
                    <button type="button" class="class="helyes_valasz rounded-2 card-text text-center" style="width:200px">${element.valasz3}</button>
                </div>
          </div>
        </div>
      </div>
    `;
  });
  txt += `</div></div>`;

  return txt;
}

export function megjelenites(txt) {
  const kartyaELEM = $("#kartya");
  kartyaELEM.html(txt);
}