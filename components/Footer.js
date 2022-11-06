const Footer = () => {
  return (
    <div> 
      Creado por <span> Sebastian Garzon Arias </span> - IG: <a href="https://www.instagram.com/sga_28_/" target="_blank" rel="noopener noreferrer"> @sga_28_</a>
      

      <style jsx>{`
        div
        {
          background: var(--color01);
          color: var(--color06);
          text-align: center;
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 200;
          width: 100%;
        }  

        span, a
        {
          color: var(--color04)
        }

      `}</style>
    </div>
  )
}

export default Footer
