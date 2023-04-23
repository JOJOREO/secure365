import React from "react";

const img_with_animation = () => {
  return (
    <div class="portfolio-items-cbh" data-ps="7" data-gutter="5px">
      <div
        class="col-cbh animated-in"
        data-default-color="true"
        style="width: 320px; left: 5px; top: 5px; z-index: 14;"
      >
        <div class="work-item">
          <img
            src="http://themenectar.com/demo/salient-business/wp-content/uploads/2016/10/girl-1000x1000.jpg"
            alt=""
            height="1000"
            width="1000"
            sizes="(min-width: 1000px) 50vw, (min-width: 690px) 100vw, 100vw"
            style="height: 358px;"
          />
          <div class="work-info-bg"></div>
          <div class="work-info">
            <div class="vert-center">
              <h3>Nectar Advertisement</h3>
              <p>October 8, 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default img_with_animation;
