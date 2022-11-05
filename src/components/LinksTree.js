import React from "react";

export default function LinksTree() {
  return (
    <div className="links-btns">

<a 
        rel="noreferrer"
        id="twitter" 
        target="_blank" 
        href="https://twitter.com/SnoopDogg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
         <div className="link-btn"> Twitter</div>
        </a>
      
        <a 
        rel="noreferrer"
        id="zuri_btn" 
        target="_blank" 
        href='https://training.zuri.team/'>
         <div className="link-btn"> Zuri Team</div>
        </a>
      
     
        <a 
        rel="noreferrer"
        id="books" 
        target="_blank" 
        href='http://books.zuri.team'>
          <div className="link-btn"> Zuri Books </div>
        </a>
      
     
        <a 
        rel="noreferrer"
        href='https://books.zuri.team/python-for-beginners?ref_id=<daniel-masona>'
          id="book_python"
          target="_blank"> <div className="link-btn">
          Python Book</div>
        </a>
      
     
        <a 
        rel="noreferrer"
        id="pitch"
         target="_blank" 
         href='https://background.zuri.team/'>
           <div className="link-btn">High Quality assurance check for coders </div>
        </a>
     
      
        <a
          rel="noreferrer"
          id="book_design"
          target="_blank"
          href='https://books.zuri.team/design-rules'
        >
         <div className="link-btn"> Free Design Book </div>
        </a>
     
       
        <a
          id="contact"
          href='./contact'
        >
         <div className="link-btn"> Contacts </div>
        </a>
      
    </div>
  );
}
