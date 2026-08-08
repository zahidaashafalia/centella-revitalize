# Centella Revitalize

aku pernah membuat website toko e commerce dengan brand skincare skin 1004 centella madagaskar dengan desaain elegant tapi menurutku untuk fiturnya itu sangat tidak lengkap aku ingin kamu merevisi nya seperti menambahkan fitur tapi untuk gambarnya tidak usah diubah tapi kalau harganya ada yang tidak sesuai kamu bisa menggantinya hanya gambarnya saja jangan diubah oke selain itu bisa kamu perbaiki dan mengubahnya menjadi website toko ecommerce beneran menggunakan bahasa pemrogaman html

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Centella Madagascar – Luxury Skincare</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">

  <style>
    :root{
      --bone:#f8f6f2;
      --bone-soft:#f1eee8;
      --gold:#b9a15c;
      --dark:#2b2b2b;
    }

    *{margin:0;padding:0;box-sizing:border-box}
    body{
      font-family:'Poppins',sans-serif;
      background:linear-gradient(180deg,var(--bone),#ffffff);
      color:var(--dark);
    }

    header{
      background:linear-gradient(135deg,#ffffff,var(--bone-soft));
      padding:40px 80px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      border-bottom:1px solid #e8e3d8;
    }
    header h1{
      font-family:'Playfair Display',serif;
      font-size:36px;
      letter-spacing:2px;
    }
    nav a{
      margin-left:30px;
      text-decoration:none;
      color:var(--dark);
      font-weight:500;
    }

    .hero{
      display:grid;
      grid-template-columns:1.2fr 1fr;
      gap:50px;
      padding:80px;
      align-items:center;
    }
    .hero h2{
      font-family:'Playfair Display',serif;
      font-size:48px;
      line-height:1.2;
    }
    .hero p{
      margin:25px 0;
      max-width:500px;
    }
    .btn{
      display:inline-block;
      padding:14px 34px;
      border-radius:30px;
      background:linear-gradient(135deg,#ffffff,var(--bone-soft));
      border:1px solid var(--gold);
      color:var(--dark);
      text-decoration:none;
      font-weight:500;
    }
    .hero img{
      width:100%;
      border-radius:30px;
      box-shadow:0 25px 60px rgba(0,0,0,.15);
    }

    .products{
      padding:80px;
    }
    .products h3{
      text-align:center;
      font-family:'Playfair Display',serif;
      font-size:34px;
      margin-bottom:50px;
    }
    .product-grid{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:35px;
    }
    .card{
      background:#fff;
      border-radius:30px;
      padding:25px;
      text-align:center;
      box-shadow:0 20px 50px rgba(0,0,0,.1);
    }
    .card img{
      width:100%;
      height:260px;
      object-fit:contain;
    }
    .card h4{
      font-family:'Playfair Display',serif;
      margin:15px 0 5px;
    }
    .price{
      color:var(--gold);
      margin-bottom:15px;
    }

    .extra-slides{
      padding:120px 0;
      background:linear-gradient(180deg,#ffffff,#f8f6f2);
    }
    .extra-slide{
      max-width:1100px;
      margin:0 auto 120px;
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:70px;
      align-items:center;
      padding:0 60px;
    }
    .extra-text h2{
      font-family:'Playfair Display',serif;
      font-size:40px;
      margin-bottom:20px;
    }
    .extra-text p{
      max-width:420px;
      line-height:1.8;
      margin-bottom:25px;
    }
    .extra-price{
      font-size:18px;
      color:var(--gold);
    }
    .extra-img img{
      width:100%;
      border-radius:26px;
      box-shadow:0 25px 60px rgba(0,0,0,.15);
    }

    footer{
      background:linear-gradient(135deg,var(--bone-soft),#ffffff);
      padding:40px;
      text-align:center;
      border-top:1px solid #e8e3d8;
    }
    footer a{
      color:var(--dark);
      margin:0 15px;
      text-decoration:none;
      font-weight:500;
    }

    @media(max-width:900px){
      .hero,.product-grid,.extra-slide{grid-template-columns:1fr}
      header{flex-direction:column;gap:20px}
    }
   
.customer-tools{
  padding:100px 0;
  background:linear-gradient(180deg,#ffffff,#f8f6f2);
}

.customer-tools h2{
  text-align:center;
  font-family:'Playfair Display',serif;
  font-size:36px;
  margin-bottom:60px;
}

.tools-grid{
  max-width:1100px;
  margin:0 auto;
  padding:0 60px;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:30px;
}

.tool-card{
  background:#ffffff;
  padding:28px 20px;
  border-radius:22px;
  box-shadow:0 18px 45px rgba(0,0,0,.08);
  display:flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  font-size:15px;
  font-weight:500;
  transition:.35s ease;
}

.tool-card:hover{
  transform:translateY(-6px);
  box-shadow:0 28px 60px rgba(0,0,0,.12);
}

.tool-icon{
  font-size:20px;
}

@media(max-width:900px){
  .tools-grid{
    grid-template-columns:1fr;
  }
}
  






CENTELLA


    Home
    Products
    Contact






    

Centella Madagascar
Luxury Skincare


    


      Perawatan kulit premium dengan kandungan Centella Madagascar
      untuk membantu menenangkan, menjaga, dan merawat kesehatan kulit.
    


    Shop Collection





Customer Comfort Tools



  


    


      🛒
      Alur Belanja Mudah
    



    


      🔒
      Pembayaran Aman
    



    


      💬
      Layanan Pelanggan Cepat
    



    


      🚚
      Pengiriman ke Seluruh Indonesia
    





Best Seller Collection



  



    


      
      

Centella Tone Brightening Capsule Ampoule


      

Rp 269.000


      Buy Now
    



    


      
      

Centella Suncream SPF 50+


      

Rp 163.000


      Buy Now
    



    


      
      

Centella Probio-Cica Essence Toner


      

Rp 149.000


      Buy Now
    



    


      
      

Centella light Cleansing Oil


      

Rp 240.000


      Buy Now
    



    


      
      

Centella Soothing Cream


      

Rp 140.000


      Buy Now
    



    


      
      

Centella Ampoule Foam


      

Rp 125.000


      Buy Now
    



    


      
      

Centella Quick Calming Pad


      

Rp 159.000


      Buy Now
    



    


      
      

Centella Cream


      

Rp 140.000


      Buy Now
    



  







  


    


      

Centella Ampoule


      


        Ampoule dengan konsentrasi tinggi Centella Madagascar
        untuk membantu menenangkan kulit dan menjaga skin barrier.
      


      Rp 269.000
    


    


      
    



  


    


      

Suncream SPF 50+


      


        Perlindungan maksimal dari sinar UV tanpa white cast,
        nyaman digunakan setiap hari.
      


      Rp 163.000
    


    


      
    



  


    


      

Centella Toner


      


        Menghidrasi kulit secara intens dengan hyaluronic acid dan ekstrak centella serta
        memperkuat skin barrier sehingga kulit lebih tahan terhadap iritasi.
      


      Rp 149.000
    


    


      
    



  


    


      

Centella Cleansing Oil


      


        Membersihkan makeup dan kotoran secara menyeluruh tanpa membuat kulit kering
        serta menjaga kelembapan alami kulit.
      


      Rp 240.000
    


    


      
    



  


    


      

Centella Soothing Cream


      


        Melembapkan dan menenangkan kulit, mengunci hidrasi agar kulit terasa
        lembut dan nyaman sepanjang hari.
      


      Rp 140.000
    


    


      
    



  


    


      

Centella Ampoule foam


      


        Membersihkan pori-pori secara lembut, mengangkat sisa 
        minyak dan debu, serta menyiapkan kulit untuk toner dan serum.
      


      Rp 125.000
    


    


      
    



  


    


      

Centella Quick Calming Pad


      


        Menenangkan kulit sensitif secara cepat dan instan serta
        memberi sensasi sejuk serta mengurangi kemerahan.
      


      Rp 159.000
    


    


      
    



  


    


      

Centella Cream


      


        Melembapkan lebih dalam dan memperbaiki skin barrier serta
        meredakan tanda kulit stres, kering, atau kemerahan.
      


      Rp 140.000
    


    


      
    





© 2026 Centella Madagascar

Instagram BrandOwner

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d7d84270-107f-41b2-87a9-a527ef24050c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
