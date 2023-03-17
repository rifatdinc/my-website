import React from 'react';
import { useParams } from 'react-router-dom';


const Blog: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  return (
    <div className="container">
      <p>Blog content</p>
      <h2 className="blog-title">My Blog {id} </h2>
      <div className="blog-post">
        <h3>My First Post</h3>
        <p>
          Mikrotik ve Cisco arasında bazı farklar var. Örneğin, Mikrotik anahtarları yüksek güç tüketimleri ile ünlüdür ve bu da onları gelişmiş teknolojisi olan Cisco anahtarlarından daha az istenir hale getirir¹. Her iki markanın da iyi paket filtreleme yetenekleri vardır ancak Mikrotik'in RouterOS'u paket filtrelemeye büyük ölçüde güvenir ve bu nedenle geliştiricilerin paket filtreleme işlevine çok zaman ve kaynak ayırması gerekir. Bu da onu sıradan Cisco yönlendiriciler tarafından sağlanan paket filtrelemesinden daha etkili hale getirir¹.

          Mikrotik'in avantajları arasında uygun fiyatlı olması, çoklu yönlendirme için çok iyi destek sunması ve iyi müşteri hizmetleri desteği bulunurken dezavantajı olarak kullanıcı dostu olmayan bir arayüze sahip olması sayılabilir¹. Cisco'nun avantajı ise yönlendiricilerin kurulumunun çok kolay olmasıdır¹.


        </p>
      </div>
    </div>
  );
};

export default Blog;