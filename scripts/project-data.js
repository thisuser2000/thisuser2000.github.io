const PROJECTS = {
	// Characters
	chris: {
		title: "Chris",
		date: "July 2023",

		images: {
			base: "assets/images/renders/characters/chris/chris",
			total: 5
		},

		description: `
			Over the Christmas break, without various school assignments taking up my time, I put more effort into character modelling. I tried to maintain a more consistent level of detail across facial features this time around. The model went through a few different iterations, with me making a list of areas that looked a bit off each time.
			<br><br>
			I used Substance Painter for most of the texturing instead of Photoshop, which allowed me to get a realtime preview of how the model would look. The ears are much better, with the edge flow correctly following the structure, whereas with Dylan V2 they were very primitive and oddly-shaped.
			<br><br>
		`,

		downloads: []
	},

	dylanV2: {
		title: "Dylan V2",
		date: "October 2022",

		images: {
			base: "assets/images/renders/characters/dylanV2/dylanV2",
			total: 6
		},

		description: `
			For the second semester's major project, I focused on improving my skills in character modelling. I brought front and side reference images of Dylan into Blender, then sculpted out a sphere to match his head and shoulders.
			<br><br>
			You can see the improvement in the facial features, with noticeably more detail in the eyes and nose. I still had trouble getting the lips looking right though. I learnt that textures can be deceiving, and that I had to reduce the contrast of the eyes considerably in Photoshop to get a satisfying result.
			<br><br>
			I experimented with XGen plugged into a PxrMarschnerHair shader to create the hair, and Maya's nHair system for the physics.
			<br><br>
		`,

		downloads: []
	},

	dylanV1: {
		title: "Dylan V1",
		date: "June 2022",

		images: {
			base: "assets/images/renders/characters/dylanV1/dylanV1",
			total: 4
		},

		description: `
			This was an attempt at recreating a classmate in 3D, which featured in the Mount Victoria render. I used photogrammetry of his head to create a base mesh, which was then covered in clean geometry.
			<br><br>
		`,

		downloads: []
	},

	cyberthug: {
		title: "Cyberthug",
		date: "January 2022",

		images: {
			base: "assets/images/renders/characters/cyberthug/cyberthug",
			total: 6
		},

		description: `
			This was the first character I modelled, based on the Cyberthug from 2021. I tried to find a balance between making it visually identical to the model and increasing the level of detail. I only got as far as making a "vanilla" model, without all the cyborg modifications.
			<br><br>
		`,

		downloads: []
	},


	// Environments
	panera: {
		title: "Panera Bread",
		date: "December 2025",

		images: {
			base: "assets/images/renders/environments/panera/panera",
			total: 4
		},

		description: `
			This environment is located way over in Colorado. I don't have the means to go there myself, but luckily there's plenty of reference from Google Maps and a certain infamous video...
			<br><br>
			Interior environments like this are always a pleasure to make, given that (apart from the carpark and some distant buildings) the boundaries are clearly defined, making it easy to know where to stop. It's like its own little isolated world.
			<br><br>
		`,

		downloads: []
	},

	war: {
		title: "War Memorial",
		date: "January 2025",

		images: {
			base: "assets/images/renders/environments/war/war",
			total: 4
		},

		description: `
			The war memorial located in the Wellington CBD seemed like an interesting place to recreate. I tried to worry less about getting the measurements exactly right, and focus more on the bigger picture. The horse statue in the foreground was created with photogrammetry, while everything else was modelled by hand.
		`,

		downloads: []
	},

	bedroom: {
		title: "Bedroom",
		date: "November 2023",

		images: {
			base: "assets/images/renders/environments/bedroom/bedroom",
			total: 3
		},

		description: `
			I try to achieve something new with each project, and this cluttered bedroom seemed like the perfect opportunity to go all in with the modelling. By establishing the layout of the camera and placeholder objects first, I was able to focus solely on what would be visible in the final render, and prioritize level-of-detail.
			<br><br>
		`,

		downloads: []
	},

	steam: {
		title: "Steam Room",
		date: "October 2022",

		images: {
			base: "assets/images/renders/environments/steam/steam",
			total: 2
		},

		description: `
			This was part of a class project involving hexagonal rooms fitted together. This one was a bit rushed, but it makes use of volumetrics to simulate steam, and roughness maps for the foggy glass and wet floor. Given the small area, I focused on making it photorealistic.
			<br><br>
			The environment is based off a real location, and was created entirely from memory.
			<br><br>
		`,

		downloads: [
			{
				icon: "maya",
				text: "Download project files",
				href: "files/steamroom.zip"
			}
		]
	},

	classroom: {
		title: "Classroom",
		date: "August 2022",

		images: {
			base: "assets/images/renders/environments/classroom/classroom",
			total: 6
		},

		description: `
			After seeing how well Mount Victoria turned out, I decided to recreate a more convenient location. I took a different approach this time, taking note of the dimensions of the scene with a tape measure. The scene extends outside, revealing a carpark and alley.
			<br><br>
			It was interesting (and rather disorienting) to see the project develop as most of the modelling was done in that same room. I had planned to use it for a short film or virtual reality experience, or maybe as a “meta” level in the major projects game where the player would encounter me working on the game.
			<br><br>
		`,

		downloads: []
	},

	victoria: {
		title: "Mount Victoria",
		date: "June 2022",

		images: {
			base: "assets/images/renders/environments/victoria/victoria",
			total: 5
		},

		description: `
			This remake of a real location was made using large-scale photogrammetry and involved taking over 1,000 photos. Using the generated model for reference, I then manually recreated everything with clean geometry.
			<br><br>
			The grass was made using XGen, while the bark was faked using a simple greyscale displacement map converted from the original texture.
			<br><br>
		`,

		downloads: []
	},

	core: {
		title: "Cyberthug Core",
		date: "November 2021",

		images: {
			base: "assets/images/renders/environments/core/core",
			total: 7
		},

		description: `
			While constructing the physical model of the Cyberthug Core, I used Adobe Illustrator to create the shapes required for lasercutting. This made it easy to create 3D models from these shapes. The point of this render is to show how I imagine the Core to look, as physical lighting methods were limited.
			<br><br>
		`,

		downloads: []
	},


	// Props
	energy: {
		title: "Energy Drink",
		date: "August 2023",

		images: {
			base: "assets/images/renders/props/energy/energy",
			total: 5
		},

		description: `
			What a way to start the morning. As with the chocolate milk, I thought about redrawing the label, but decided that it would take a substantial amount of time for little payoff given the 2 hours allocated for this project.
			<br><br>
			A PxrVolume and disk light were used for the purple glow, while the particles and lightning were added in post-production. I made use of vignetting and lens distortion for added realism.
			<br><br>
		`,

		downloads: [
			{
				icon: "maya",
				text: "Download project files",
				href: "files/steamroom.zip"
			}
		]
	},

	milk: {
		title: "Chocolate Milk",
		date: "August 2023",

		images: {
			base: "assets/images/renders/props/milk/milk",
			total: 4
		},

		description: `
			This simple prop was made in just 2 hours. It was an experiment in fine-tuning specular and subsurface settings to match how it would look in the real world. If you look closely you can see the bottom of the lid is darker than the top, as it is covering the bottle and allowing less light to pass through.
			<br><br>
		`,

		downloads: [
			{
				icon: "maya",
				text: "Download project files",
				href: "files/steamroom.zip"
			}
		]
	},

	lego: {
		title: "LEGO Harry Potter",
		date: "October 2022",

		images: {
			base: "assets/images/renders/props/lego/lego",
			total: 3
		},

		description: `
			This project involved recreating specific LEGO pieces from a chosen set, then fitting them together as you would in real life. I experimented with compositing it over a photo I took, taking into consideration light sources, viewing angles and depth-of-field.
			<br><br>
		`,

		downloads: [
			{
				icon: "maya",
				text: "Download project files",
				href: "files/steamroom.zip"
			}
		]
	}
};
