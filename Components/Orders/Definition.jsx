import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const INSIGHTS = [
	{
		icon: ArrowRight,
		color: "text-green-500",
		insight: "Increase IoT sensor usage for real-time monitoring, predictive maintenance, and optimized system adjustments.",
	},
	{
		icon: ArrowRight,
		color: "text-green-500",
		insight:  "Employ advanced cleaning technologies, real-time monitoring, and tar-reduction catalysts to improve syngas purity.",
	},
	{
		icon: ArrowRight,
		color: "text-green-500",
		insight: 'Invest in high-speed rail and metro systems, develop nationwide EV infrastructure, and incentivize electric vehicle adoption to cut transportation emissions.',
	},
	{
		icon: ArrowRight,
		color: "text-green-500",
		insight: "Implement recycling and composting programs, convert organic waste to biogas, and expand reforestation initiatives to reduce methane emissions and create carbon sinks.",
	},
];

const Definition = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI Recommendations To Increase IGOS Effiency</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default Definition;