class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/visualize/2d/$id?" (controller: "visualize", action: "twodimensions")
        "/visualize/3d/$id?" (controller: "visualize", action: "threedimensions")

        "/"(controller:"team")
        "500"(view:'/error')
	}
}
