const crearVector = (n, m) =>
{
    vector = [];
     
    for(let i = 0; i < n; i++)
    {
        vector.push(Math.round(Math.random() * m));
    }
    return vector;
};

 const sumaVector = (v1, v2, v3) =>
{
   let v4 = [];
    if(v1.length == v2.length)
        {
           for (let i = 0; i < v1.length; i++) 
           {
             v4[i] = v1[i] + v2[i] + v3[i];
            
           }
        }
    return v4;
};

 const productoNumeroVector = (n, v) =>
{
    let vectorProdu = [];
    for (let i = 0; i < v.length; i++) 
    {
        vectorProdu[i] = n * v[i];
    }
    return vectorProdu;
};

 const restaVector = (v1, v2) =>
{
    let v3 = [];
    if(v1.length == v2.length)
        {
           for (let i = 0; i < v1.length; i++) 
           {
             v3[i] = v1[i] - v2[i];
            
           }
        }
    return v3
};

const productoVector = (v1, v2) =>
{
  let v3 = [];
    if(v1.length == v2.length)
        {
            for (let i = 0; i < v1.length; i++) 
            {
                v3[i] = v1[i] * v2[i];
            
            }
        }
    return v3
     
};

const cuadrado = n => n * n;

module.exports = {crearVector, productoNumeroVector, restaVector, productoVector, cuadrado};