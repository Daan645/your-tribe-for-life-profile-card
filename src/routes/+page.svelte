<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Daan Jacobs</title>
    <!-- Import files -->
    <link rel="stylesheet" href="CSS/index.css" />
    <script src="/JS/index.js" defer></script>
  </head>

  <body>
    <div class="page-wrapper">

      <!-- Hero -->
      <section class="hero">
        <div class="hero-title-container">
          <h1 class="hero-title">Daan Jacobs</h1>
          <button id="html-tags-button" class="hero-subtext"
            >Frontend Developer</button>
        </div>
        <div class="hero-arrow-container">
          <img
            class="hero-arrow-img"
            src="/images/Arrow.png"
            alt="arrow down"
          />
        </div>
        
        <!-- Hidden easter egg -->
        <span class="html-tags">&lt;/html&gt</span>
        <span class="html-tags">&lt;/body&gt</span>
        <span class="html-tags">&lt;/head&gt</span>
        <span class="html-tags">&lt;/footer&gt</span>
        <span class="html-tags">&lt;/h1&gt</span>
        <span class="html-tags">&lt;/div&gt</span>
        <span class="html-tags">&lt;/section&gt</span>
      </section>

      <!-- Languages -->
      <section class="languages">
        <div class="language-title">
          <h2>Programmeer Talen</h2>
        </div>

        <div class="languages-container">

          <section class="languages-html">
            <h2>HTML</h2>
            <button class="close-button html-content" id="closeHtml">X</button>
            <p class="html-content language-text" id="html-text">
              Html bepaalt de basisstructuur van de website. Goede en
              semantische Html is essentieel voor een goede website en zorgt
              voor betere resultaten in zoekmachines.
            </p>
            <box-icon type="logo" name="html5" size="10em"></box-icon>
          </section>

          <section class="languages-css">
            <h2>CSS</h2>
            <button class="close-button html-content" id="closeHtml">X</button>
            <p class="html-content language-text" id="html-text">
              Html bepaalt de basisstructuur van de website. Goede en
              semantische Html is essentieel voor een goede website en zorgt
              voor betere resultaten in zoekmachines.
            </p>
            <box-icon name="css3" type="logo" size="10em"></box-icon>
          </section>

          <section class="languages-js">
            <h2>Javascript</h2>
            <button class="close-button html-content" id="closeHtml">X</button>
            <p class="html-content language-text" id="html-text">
              Html bepaalt de basisstructuur van de website. Goede en
              semantische Html is essentieel voor een goede website en zorgt
              voor betere resultaten in zoekmachines.
            </p>
            <box-icon name="javascript" type="logo" size="10em"></box-icon>
          </section>

          <section class="languages-node">
            <h2>Node JS</h2>
            <box-icon name="nodejs" type="logo" size="10em"></box-icon>
          </section>

          <section class="languages-php">
          <h2>PHP</h2>
            <box-icon name="php" type="logo" size="10em"></box-icon>
          </section>

          <section class="languages-mysql">
            <h2>MYSQL</h2>
            <box-icon name="postgresql" type="logo" size="10em"></box-icon>
          </section>
        </div>
      </section>
    </div>
  </body>
</html>
