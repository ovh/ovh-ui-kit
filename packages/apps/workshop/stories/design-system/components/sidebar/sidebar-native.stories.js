export default {
  title: 'Design System/Components/Sidebar/Native',

  parameters: {
    docs: { iframeHeight: 400 },
  },
};

export const Simple = () => `
<nav class="oui-sidebar" style="width: 300px;">
  <div class="oui-sidebar-menu">
    <ul class="oui-sidebar-list">
      <li class="oui-sidebar-list__item">
        <span class="oui-sidebar-link">
          Root 1
        </span>
        <div class="oui-sidebar-menu">
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link oui-sidebar-link_active" href="#">
                Level 1-1
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Level 1-2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Level 1-3
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Level 1-4
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="oui-sidebar-list__item">
        <span class="oui-sidebar-link">
          <span class="oui-icon oui-icon-gear"></span>
          Root 2
        </span>
        <div class="oui-sidebar-menu">
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Level 1-1
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Level 1-2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Level 1-3
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="oui-sidebar-list__item">
        <span class="oui-sidebar-link">
          Root 3
        </span>
        <div class="oui-sidebar-menu">
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Level 1-1
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Level 1-2
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>`;

export const MultiLevels = () => `
<nav class="oui-sidebar" style="width: 300px;">
  <!-- Root -->
  <div class="oui-sidebar-menu">
    <ul class="oui-sidebar-list">
      <li class="oui-sidebar-list__item">
        <span class="oui-sidebar-link">
          Category 1
        </span>
        <!-- Level 1 -->
        <div class="oui-sidebar-menu">
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Product 1
              </a>
              <!-- Level 2 -->
              <div class="oui-sidebar-menu">
                <ul class="oui-sidebar-list">
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link oui-sidebar-link_active" href="#">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="#">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="#">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>`;

export const Collapsible = () => `
<nav class="oui-sidebar" style="width: 300px;">
  <div class="oui-sidebar-menu">
    <ul class="oui-sidebar-list">
      <li class="oui-sidebar-list__item">
        <span class="oui-sidebar-link" aria-haspopup="true" aria-expanded="true">
          Root 1
        </span>
        <div class="oui-sidebar-menu">
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <button type="button" class="oui-sidebar-link" aria-haspopup="true" aria-expanded="false">
                Level 1-1
              </button>
              <div class="oui-sidebar-menu">
                <ul class="oui-sidebar-list">
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="#">
                      Level 2-1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <button type="button" class="oui-sidebar-link" aria-haspopup="true" aria-expanded="true">
                      Level 2-2
                    </button>
                    <div class="oui-sidebar-menu">
                      <ul class="oui-sidebar-list">
                        <li class="oui-sidebar-list__item">
                          <a class="oui-sidebar-link" href="#">
                            Level 3-1
                          </a>
                        </li>
                        <li class="oui-sidebar-list__item">
                          <a class="oui-sidebar-link" href="#">
                            Level 3-2
                          </a>
                        </li>
                        <li class="oui-sidebar-list__item">
                          <a class="oui-sidebar-link oui-sidebar-link_active" href="#">
                            Level 3-3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="#">
                      Level 2-3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <button type="button" class="oui-sidebar-link" aria-haspopup="true" aria-expanded="true">
                Level 1-2
              </button>
              <div class="oui-sidebar-menu">
                <ul class="oui-sidebar-list">
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="#">
                      Level 2-1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <button type="button" class="oui-sidebar-link" aria-haspopup="true" aria-expanded="true">
                      Level 2-2
                    </button>
                    <div class="oui-sidebar-menu">
                      <ul class="oui-sidebar-list">
                        <li class="oui-sidebar-list__item">
                          <a class="oui-sidebar-link" href="#">
                            Level 3-1
                          </a>
                        </li>
                        <li class="oui-sidebar-list__item">
                          <a class="oui-sidebar-link" href="#">
                            Level 3-2
                          </a>
                        </li>
                        <li class="oui-sidebar-list__item">
                          <a class="oui-sidebar-link oui-sidebar-link_active" href="#">
                            Level 3-3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="#">
                      Level 2-3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Level 1-3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>`;

export const Fixed = () => `
<nav class="oui-sidebar oui-sidebar_fixed" style="width: 300px;">
  <!-- Root -->
  <div class="oui-sidebar-menu">
    <ul class="oui-sidebar-list">
      <li class="oui-sidebar-list__item" aria-haspopup="true" aria-expanded="false">
        <button type="button" class="oui-sidebar-link">
          Category 1
        </button>
      </li>
      <li class="oui-sidebar-list__item" aria-haspopup="true" aria-expanded="false">
        <button type="button" class="oui-sidebar-link">
          Category 2
        </button>
      </li>
      <li class="oui-sidebar-list__item">
        <button type="button" class="oui-sidebar-link" aria-haspopup="true" aria-expanded="true">
          Category 3
        </button>
        <!-- Level 1 -->
        <div class="oui-sidebar-menu">
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <button type="button" class="oui-sidebar-link" aria-haspopup="true" aria-expanded="true">
                Product 1
              </button>
              <!-- Level 2 -->
              <div class="oui-sidebar-menu">
                <ul class="oui-sidebar-list">
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link oui-sidebar-link_active" href="#">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="#">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="#">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="#">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>`;
