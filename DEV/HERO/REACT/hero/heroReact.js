
const MainContent = (
    <div>
        <section class="Hero" id="blur">
      <div class="nav">
        <img src="Logo.png" alt="" />
        <div class="logo">
          <h1>HERRSCHAFT</h1>
        </div>
        <div class="navigation">
          <nav>
            <ul id="menuList">
              <li class="semi">
                <img src="Logo.png" alt="" />
                <h1>HERRSCHAFT</h1>
              </li>
              <hr />
              <li><a href="">Home</a></li>
              <li><a href="">About&nbsp;Us</a></li>
              <li><a href="">Contact&nbsp;Us</a></li>
              <li><a href="">Testimonies</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </nav>
        </div>
        <div class="login">
          <h2>Login</h2>
        </div>
        <div class="button">
          <button>Register</button>
        </div>
        <img class="bar" src="bars.png" onclick="togglemenu()" alt="" />
      </div>
      <div class="mid">
        <div class="row">
          <h2 class="strength">
            The <em>Strength</em> of a<br />
            Thousand Men.
          </h2>
          <p>The energy drink to resurrect strenght from within.</p>
          <button>Get Pricing</button>
        </div>
        <div class="con-lady"></div>
      </div>
      <div class="drink">
        <div class="fun"></div>
        <img
          class="image1"
          src="undraw_having_fun_re_vj4h 2.png"
          alt="image of people having fun"
        />
      </div>
      <img class="vector_arrow1" src="Group46.png" alt="scswd" />
    </section>
    </div>
)


ReactDOM.render (
    MainContent,
    document.getElementById("root")
)