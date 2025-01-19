import HalfBarCard from "./HalfBarCard";
import Topbar from "./Topbar";
function Homepage() {
	return (
		<>
			<Topbar />
			<br />
			<br />

			<div className="full-grid-2">
				<div className="hero-section">
					<div className="center-hero-yap">
						<h1 className="hero-yap">
							Welcome to blah blah,
						</h1>
						<h1 className="hero-yap">
							A modern multicultural vegetarian cuisine
						</h1>
					</div>
				</div>

				<div className="about-us-home">
					
				</div>

				<div className="half-grid">
					<HalfBarCard title = {"Menu"} column={1}>
						<div></div>
					</HalfBarCard>
					<HalfBarCard title = {"Reservations"} column={2}>
						<div></div>
					</HalfBarCard>
					<HalfBarCard title = {"Reservations"} column={3}>
						<div></div>
					</HalfBarCard>
					<HalfBarCard title = {"Reservations"} column={4}>
						<div></div>
					</HalfBarCard>
					<HalfBarCard title = {"Reservations"} column={5}>
						<div></div>
					</HalfBarCard>
				</div>
			</div>
		</>
	);
}
export default Homepage;
