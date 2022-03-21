import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@containers/Layout"
import { PlatziAgenda } from "../pages/PlatziAgenda"
import { Children } from "../Pages/Children"

const App =()=> { return (

<BrowserRouter basename="/platziagenda">
	<Layout>
		<Routes>
			<Route exact path="/" 
				element={
					 <PlatziAgenda
						date="domingo 20"
						hightTitle="hacks para aprender en platzi"
						who="isis garcia y wilmar zapata"
						hour={<em>4:00 am hora bogota</em>}
					>
						<Children 
							hightTitle={<><em>Como</em> conseguir trabajo en la industria web</>}
							who="oscar barajas"
							hour={<s>8:00 am hora bogota</s>}
						/>
						<Children 
							hightTitle="como empezar a aprender en internet"
							who="edna cardenas, geraldinne bohorquez, juan davila"
							hour="9:00 am hora mexico"
						/>
						<Children 
							hightTitle="HOC deberia conectarse a la api"
							who="platzi agenda y dar info en tiempo real"
							hour={<b>9:00 am hora mexico</b>}
						/>
				 	</PlatziAgenda>}
			/>

			<Route path="/ejemplo" 
				element={ <PlatziAgenda date="" highTitle="" who="" hour=""/>} />

			<Route exact path="/viernes13" 
				element={
				 <PlatziAgenda
					date="viernes 13"
					highTitle="como hackear visual estudio code con vim"
					who="cheatmodes4"
					hour="4:00 am hora bogota"
				 />} />

			<Route path="/viernes14" 
				element={
					 <PlatziAgenda
						date="viernes 14"
						hightTitle="Blogueando desde el router ReactJs"
						who="cheatModes4"
						hour={<em>4:00 am hora bogota</em>}
					>
						<Children 
							hightTitle={<><em>es hora</em> "de usar mas las HOCS"</>}
							who="juanDc es batman"
							hour={<s>8:00 am hora bogota</s>}
						/>
						<Children 
							hightTitle="como hackear servidores de la nasa"
							who="oscar barajas"
							hour={<b>9:00 am hora mexico</b>}
						/>
						<Children 
							hightTitle="HOC deberia conectarse a la api"
							who="platzi agenda y dar info en tiempo real"
							hour="9:00 am hora mexico"
						/>
				 	</PlatziAgenda>}
			/>
		</Routes>
	</Layout>
</BrowserRouter>

); }; export { App };
