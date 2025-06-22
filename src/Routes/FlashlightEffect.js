import { useState } from "react";

function FlashlightEffect() {
  const [lightPosition, setLightPosition] = useState({ top: 0, left: 0 });
  const [lightOff, setLightOff] = useState(false);

  const handleMouseMove = (e) => {
    setLightPosition({
      top: e.clientY,
      left: e.clientX,
    });
  };

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      setLightOff((prev) => !prev); // Left click toggles flashlight
    }
  };

  return (
    <div
      className="relative w-screen h-screen bg-white text-black overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        aliquam iure molestiae dolores sequi quia non neque, quibusdam suscipit
        veniam assumenda rerum rem corrupti accusantium.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
        consequatur dolores cupiditate sit corrupti. Veritatis omnis unde, ab
        incidunt dolor, ad nulla dolorem neque accusantium ipsa, qui quod
        placeat? Eaque fugiat sunt dolores ullam itaque quidem maxime culpa
        totam quisquam corporis, impedit recusandae exercitationem autem minima,
        nesciunt dolore qui incidunt ea aspernatur, in hic nihil. Autem fuga sit
        quo velit eligendi! Magnam alias culpa doloribus odit? Libero iure sunt
        ullam soluta! Vero rem, nisi reprehenderit magni sint tenetur molestias?
        Esse maiores illum quis consequatur soluta? Obcaecati voluptatem
        assumenda, quae nostrum non, est recusandae, ipsam saepe porro
        consequatur fugit dignissimos eos ullam quaerat delectus dolor magnam
        adipisci! Voluptatum porro similique consequuntur ut voluptatem debitis
        odit voluptate? Praesentium, exercitationem. Perspiciatis beatae quaerat
        minus dolorem, eos debitis deserunt, quam est, error dolores natus
        reprehenderit dolor recusandae aspernatur quis aut eaque! Magni eius
        dolorem voluptate autem. Illum eum porro consequatur modi magni aliquid
        sint, alias tempore quia molestiae omnis, iste praesentium pariatur
        dolores quibusdam facilis id reiciendis vel quo ipsa eligendi
        voluptatum? Dicta, neque? Modi, nostrum odio quos laboriosam provident
        placeat aperiam ratione eaque doloremque expedita quia officiis
        voluptatem, accusantium cum, tempora exercitationem. Eaque ab temporibus
        quod expedita libero pariatur? Hic laboriosam esse ullam totam debitis
        iure maiores assumenda repudiandae velit saepe illum aspernatur, magni
        adipisci eius quod ad. Ex esse reiciendis optio similique magnam odio
        hic, magni consequuntur nisi voluptates. Earum voluptates quos voluptas
        esse vitae error illo, blanditiis aliquam voluptate alias perferendis,
        quam odio iste quidem nisi similique asperiores excepturi numquam
        praesentium! Quam, blanditiis dolor explicabo eligendi consequuntur
        autem distinctio? Similique pariatur doloremque tempora recusandae
        dolorem omnis vero iusto eveniet, dolorum blanditiis iure quod placeat
        cupiditate repellat officiis odio minus rem! Distinctio eius iure
        aperiam nobis molestiae eos officia delectus? Possimus magnam officia
        voluptatum amet minus placeat voluptatem rem corporis eveniet? Ab enim
        neque tenetur quia, accusantium perferendis velit iste consequatur
        nostrum culpa architecto ratione totam minima odio. Tenetur ab quam
        nulla porro nostrum. Minima ad libero aut sint officia beatae fuga et
        similique quod itaque laborum debitis eveniet laboriosam dolorem
        pariatur quam velit, necessitatibus, vel, est laudantium obcaecati!
        Veniam modi a aut nisi nesciunt quisquam minus nulla nostrum dolorum,
        tempora sit. Ut veritatis nam numquam, quisquam sint suscipit. Deleniti
        vel voluptas laborum officiis vitae dolore, ipsum magnam eos
        exercitationem, nam nostrum excepturi harum reiciendis sed sapiente
        possimus odio ratione! Asperiores voluptas omnis reiciendis consequuntur
        ipsa esse quisquam placeat ex error, quo modi facilis! Natus
        exercitationem, ullam fuga iste blanditiis recusandae, nemo sequi
        expedita accusamus dolor minima vero doloribus, voluptas voluptates
        consectetur odit repellendus earum. Iste sequi, quae, voluptates
        laborum, quod delectus ipsum modi veritatis inventore repudiandae maxime
        molestias similique pariatur necessitatibus omnis! Nesciunt, vel aut.
        Velit voluptatum quisquam dolorum beatae, officia accusamus perferendis
        recusandae veritatis laboriosam esse ab ipsam adipisci obcaecati,
        distinctio cum hic. Animi, vero quasi obcaecati, nostrum pariatur
        aliquam ea distinctio voluptatibus, illum assumenda commodi! Enim aut
        eveniet beatae id pariatur animi non. Amet consequatur facilis voluptate
        incidunt aut hic ex iusto impedit possimus? Perspiciatis, voluptatum.
        Saepe provident laboriosam corrupti, esse id perferendis optio commodi
        excepturi hic quam eligendi porro quod ipsam iste velit atque ut. Et,
        dicta. Aperiam, cum qui velit magnam dicta ab vel alias minima sapiente
        repellendus voluptatum natus recusandae. Voluptatem at illo vitae
        distinctio doloremque reprehenderit iure sint quod saepe, eos placeat
        harum omnis dolores corrupti eius maiores minima molestiae fugit unde
        maxime aspernatur. Provident eveniet ducimus in nihil impedit, aut
        sapiente quae a totam ipsam corporis eligendi aperiam quos nemo. Quidem
        tenetur quaerat cumque voluptate possimus obcaecati laboriosam at
        mollitia, iusto fugit architecto nisi. Dolorem expedita doloribus id, ad
        unde sapiente corporis tempora molestiae non ducimus velit quo qui,
        vitae architecto dolor fuga repellendus. Sit minima eaque, nihil
        laudantium, iure consequuntur perferendis sunt fuga earum est libero
        quos dolore vero officiis. Dolorem eius cum aliquid? Dolore ab eaque
        quidem nemo animi sit at vero autem. Dolorem expedita eveniet aliquam
        deserunt animi. Delectus excepturi ea nulla rem ullam, tenetur vitae
        praesentium tempora. Tenetur excepturi error repellat distinctio
        corrupti optio iusto consectetur adipisci ut ratione nam alias ad totam
        suscipit, asperiores fugit hic placeat doloremque? Exercitationem
        molestiae, assumenda soluta, accusamus quisquam eius voluptatum
        necessitatibus vero tempora aliquid maiores iste cumque? Magnam fuga
        quos, dicta placeat est asperiores doloremque reiciendis repellendus
        eos. Odit sapiente consequatur labore totam hic sequi accusantium
        tenetur cumque? Officia quo maxime vero est! Beatae numquam, ex quia
        sapiente ab obcaecati unde deserunt nostrum temporibus. Labore eveniet
        ex quas nostrum voluptates, dolorum ullam ducimus aperiam eligendi rerum
        quod saepe minima illo totam, voluptatibus molestiae atque eos! Id
        quidem soluta deleniti ut asperiores, assumenda aperiam facere eos eum
        minus a sunt quasi accusamus vero molestiae deserunt! Sunt quas dolorum
        molestiae veniam illum vero sequi repudiandae aspernatur sed
        exercitationem non, perspiciatis, illo nobis iusto veritatis magni amet
        animi a iure aliquid modi eum, culpa nulla earum? Maiores excepturi
        voluptates laborum exercitationem odit consequatur sapiente repellendus
        odio? Cupiditate nam voluptatem eveniet nesciunt, dolores illum? Placeat
        enim accusantium neque, maxime eius non facilis dignissimos quos
        temporibus illo provident rerum vel odit dolores iure perspiciatis minus
        quidem aliquam consequatur eum exercitationem. Aliquid, molestiae vel?
        Provident iusto dicta ad assumenda obcaecati in quasi mollitia quo
        voluptas inventore ipsum et dolorem laudantium, sint cumque quae
        necessitatibus ullam aut ex explicabo facilis repudiandae nobis
        deserunt. Eaque voluptatem, totam nisi dolorum maxime fugit nostrum
        autem beatae. Eum distinctio inventore perspiciatis, minima possimus
        quibusdam. Officiis nam quod totam nemo? Libero explicabo, laboriosam
        fuga doloremque cum officiis quasi blanditiis dolor distinctio
        voluptates iure obcaecati? Omnis similique sequi suscipit? Architecto
        incidunt ab doloribus? Facere nulla optio accusantium deleniti iure
        aperiam, blanditiis, cum magni aspernatur quaerat libero sapiente
        numquam at, nostrum eaque impedit atque. Sequi numquam velit tempora
        ratione? Repudiandae soluta accusantium, error dolor assumenda nemo sint
        neque blanditiis, repellat iure perspiciatis tenetur voluptatibus nisi
        obcaecati quibusdam nostrum tempore. Dolorem cupiditate delectus unde
        perspiciatis. Molestiae, labore nulla tempore suscipit consequuntur
        repellat quasi ex sint voluptatibus, voluptatem exercitationem quaerat
        illo laborum! Cumque mollitia nobis facilis harum illum. Fugiat
        voluptate atque eaque animi inventore perferendis dignissimos nihil.
        Nesciunt, quaerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, qui.
        Enim dolore laborum quo consequuntur perferendis voluptatibus possimus
        architecto eius, eligendi aperiam eos est dignissimos sed esse.
      </p>

      {/* Flashlight Effect */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 opacity-100`}
        style={
          !lightOff
            ? {
                maskImage: `radial-gradient(circle at ${lightPosition.left}px ${lightPosition.top}px, rgba(0,0,0,0) 10px, rgba(0,0,0,1) 100px)`,
                WebkitMaskImage: `radial-gradient(circle at ${lightPosition.left}px ${lightPosition.top}px, rgba(0,0,0,0) 10px, rgba(0,0,0,1) 100px)`,
              }
            : {} // No masking when light is off, making the screen fully black
        }
      />
    </div>
  );
}

export default FlashlightEffect;
