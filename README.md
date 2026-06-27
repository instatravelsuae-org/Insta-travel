/* ==========================
   Insta Travel - Corporate Theme
   Modern Blue & White CSS
========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f8fc;
    color:#333;
    line-height:1.6;
}

/* Header */

header{
    background:#0056b3;
    color:#fff;
    padding:20px 8%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:sticky;
    top:0;
    z-index:1000;
}

.logo{
    font-size:28px;
    font-weight:bold;
}

nav ul{
    list-style:none;
    display:flex;
}

nav ul li{
    margin-left:25px;
}

nav ul li a{
    color:white;
    text-decoration:none;
    font-weight:600;
    transition:.3s;
}

nav ul li a:hover{
    color:#87cefa;
}

/* Hero */

.hero{
    background:linear-gradient(rgba(0,86,179,.7),rgba(0,86,179,.7)),
    url('travel.jpg') center/cover;
    color:white;
    text-align:center;
    padding:130px 20px;
}

.hero h1{
    font-size:52px;
    margin-bottom:20px;
}

.hero p{
    font-size:20px;
    margin-bottom:30px;
}

.btn{
    display:inline-block;
    padding:15px 35px;
    background:white;
    color:#0056b3;
    border-radius:30px;
    text-decoration:none;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    background:#0056b3;
    color:white;
    border:2px solid white;
}

/* Sections */

section{
    padding:80px 8%;
}

section h2{
    text-align:center;
    color:#0056b3;
    margin-bottom:40px;
    font-size:36px;
}

/* Cards */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
    transition:.3s;
    text-align:center;
}

.card:hover{
    transform:translateY(-10px);
}

.card h3{
    color:#0056b3;
    margin-bottom:15px;
}

/* About */

.about{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:40px;
    align-items:center;
}

.about img{
    width:100%;
    border-radius:15px;
}

/* Contact */

.contact-form{
    max-width:700px;
    margin:auto;
}

.contact-form input,
.contact-form textarea{
    width:100%;
    padding:15px;
    margin-bottom:20px;
    border:1px solid #ccc;
    border-radius:8px;
}

.contact-form button{
    width:100%;
    padding:15px;
    background:#0056b3;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-size:18px;
}

.contact-form button:hover{
    background:#003f88;
}

/* Footer */

footer{
    background:#003f88;
    color:white;
    text-align:center;
    padding:25px;
}

/* Responsive */

@media(max-width:768px){

header{
    flex-direction:column;
}

nav ul{
    flex-direction:column;
    text-align:center;
    margin-top:15px;
}

nav ul li{
    margin:10px 0;
}

.hero h1{
    font-size:36px;
}

.hero p{
    font-size:18px;
}

}
