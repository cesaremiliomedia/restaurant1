import React from "react"

export default function Collapse() {
  return (
    <div>
      <a
        class="btn btn-primary mw-100 mx-auto"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Link with href
      </a>
      <div class="collapse" id="collapseExample">
        <div class="card card-body text-dark">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  )
}
