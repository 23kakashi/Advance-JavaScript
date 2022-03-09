
function creatData(n,r,u,i){
   this.name = n,
   this.releaseDate = r,
   this.url = u,
   this.rating = i
}



let m1 = new creatData('The Batman', '2020', 'https://images.moviesanywhere.com/4bc2fb0679fed349a33fb58eb6570eda/a54a9f81-8b39-4e98-8270-a85069d3d9d8.webp?h=375&resize=fit&w=250',8.5 )
let m2 = new creatData('Avangers Endgame', '2019', 'https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.webp?h=375&resize=fit&w=250',8.3 )
let m3 = new creatData('Lord of the Rings', '2003', 'https://images.moviesanywhere.com/9e30e0633f95015c22206c2cc4d8a540/b4752ba8-4145-4d3d-9804-c1645c3f9def.webp?h=375&resize=fit&w=250',9.3 )
let m4 = new creatData('1917', '2021', 'https://images.moviesanywhere.com/6c6bcf12b22572b1eb4428330fbc6c13/f7967f1f-6255-4f33-8811-ab4a29aecdbb.webp?h=375&resize=fit&w=250',8.2 )
let m5 = new creatData('Harry potter', '2014', 'https://images.moviesanywhere.com/5f0537520f90b687fc5db7f241affc4c/0280fd81-6b8a-49cc-9b81-5154eee498dc.webp?h=375&resize=fit&w=250', 8.8)
let m6 = new creatData('Eternals', '2022', 'https://images.moviesanywhere.com/24569971a83a96d9fd80c713ac8713d2/2aa9aa94-71b8-467d-a60a-158399f7fd3d.webp?h=375&resize=fit&w=250',7.2)
let m7 = new creatData('Star Wars', '2013', 'https://images.moviesanywhere.com/03e036152da1354edfb5e01476470534/795252df-0c05-4ebc-97cf-99cdbbbe91c1.webp?h=250&resize=fit&w=250', 8.1)
let m8 = new creatData('West Pide Story', '2020', 'https://images.moviesanywhere.com/8a0540a169b34bceee11e13dca540394/658f60ed-8c1f-4bef-8af8-94dc3f52d672.webp?h=375&resize=fit&w=250', 7.4)
let m9 = new creatData('Matrix', '2010', 'https://images.moviesanywhere.com/2271fb6537629d3059278a2178dbc3d8/3c028b6c-7b15-4e15-aae4-2c02ebfe2a4a.webp?h=375&resize=fit&w=250', 7.8)

let moviesData = [m1,m2,m3,m4,m5,m6,m7,m8,m9] 
// console.log(moviesData)

localStorage.setItem('movies', JSON.stringify(moviesData))