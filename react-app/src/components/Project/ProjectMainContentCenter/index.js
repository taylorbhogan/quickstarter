import styles from "./ProjectMainContentCenter.module.css";

function ProjectMainContentCenter({ project }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.storyDiv}>
        <div className={styles.storyHeader}>Story</div>
        {/* <div>{project.story}</div> */}
        {/* <div dangerouslySetInnerHTML={{ __html: project.story }}></div> */}
        <div style={{fontSize: '40px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
          sem vehicula elit dapibus maximus. In lobortis tellus ante, vitae
          scelerisque nibh venenatis sit amet. Nunc congue euismod scelerisque.
          Integer aliquam, erat vitae interdum pulvinar, erat tortor egestas
          ante, sed scelerisque mauris felis sit amet erat. Quisque eu semper
          urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nunc aliquam maximus justo. Fusce ante dolor,
          consequat pulvinar odio eget, faucibus ultrices nisl. Aliquam
          facilisis condimentum massa, vel congue dui suscipit a. Etiam maximus
          ut diam ac tincidunt. Phasellus a ligula nec mi sollicitudin euismod
          nec nec ante. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Vestibulum mattis ex risus, faucibus
          dictum magna bibendum vel. Integer a erat nisi. Proin in nisl sit amet
          eros mattis placerat. Donec quis libero blandit, aliquam purus a,
          iaculis odio. Aliquam suscipit nibh et ipsum dapibus consectetur.
          Integer vel lorem sed leo auctor tristique ut non sapien. Nullam
          imperdiet egestas neque, et sagittis turpis dignissim eget. Vivamus
          varius lorem purus, sit amet pulvinar quam hendrerit vel. Curabitur ac
          risus fringilla, dignissim quam ut, convallis odio. Morbi lectus est,
          ornare eget laoreet sed, molestie ut ante. Integer tempus, nunc nec
          convallis hendrerit, nisl augue pharetra erat, a sagittis risus metus
          a nibh. Sed sed sapien eu nunc fermentum scelerisque interdum nec
          nulla. Proin placerat, velit sed accumsan auctor, lacus quam molestie
          eros, sit amet efficitur sapien velit in orci. Maecenas sollicitudin
          diam quis arcu rutrum, lobortis imperdiet magna molestie. Ut egestas
          pulvinar nunc, vel hendrerit quam finibus a. Sed egestas volutpat
          placerat. Maecenas faucibus, dolor in vehicula accumsan, mauris dui
          rutrum elit, id lobortis elit tortor eget nibh. Vestibulum malesuada
          pharetra magna, sit amet laoreet metus blandit vitae. Duis sed risus
          mollis, fringilla nunc quis, faucibus ex. Quisque ut scelerisque
          massa. Quisque metus augue, ornare quis odio id, ullamcorper hendrerit
          urna. Fusce nisi nunc, sodales vitae ex pharetra, mattis euismod
          lorem. Integer ut metus est. Integer elementum vel risus dignissim
          feugiat. Donec faucibus tristique quam pretium tempor. Curabitur orci
          mi, tristique ac odio ac, eleifend mattis enim. Proin ac viverra ex,
          eget ultrices ante. Sed bibendum arcu et tellus finibus interdum.
          Curabitur porttitor eleifend lectus ut consectetur. Morbi fringilla
          placerat condimentum. Mauris augue urna, auctor eu tortor at, feugiat
          auctor ipsum. Cras ullamcorper ornare neque eu hendrerit. Suspendisse
          varius diam id nisl tincidunt, vel rutrum justo mattis. Nam justo
          purus, eleifend at aliquam ut, bibendum et neque. Morbi id turpis at
          nulla semper bibendum id eu nunc. Mauris in lectus quis magna
          tincidunt efficitur. Maecenas sed diam et arcu hendrerit tincidunt. In
          volutpat eleifend elementum. Duis elementum imperdiet nisi vitae
          tempus. Proin lobortis vehicula efficitur. Duis porttitor ornare
          magna, ut vehicula metus commodo vel. Sed non nibh ac lacus
          consectetur pharetra. Etiam nisi ante, viverra sit amet odio vel,
          euismod cursus dui. Praesent dapibus semper quam at placerat. Aliquam
          ullamcorper eget elit non semper. Proin est magna, lacinia in tortor
          sit amet, lobortis interdum lorem. Donec non orci sed tellus vulputate
          semper. Vestibulum porttitor vitae erat vitae egestas. Aenean sed
          mattis metus. Nam odio neque, finibus sit amet urna ut, pretium dictum
          odio. Proin risus magna, aliquam at elit suscipit, luctus finibus ex.
          Maecenas nec sem velit.
        </div>
      </div>
    </div>
  );
}

export default ProjectMainContentCenter;
