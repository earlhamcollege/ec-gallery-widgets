module.exports = {        
	extend: 'apostrophe-widgets',        
	label: 'EC Gallery',
	perPage: 50,
	addFields:[
		{
			name: 'items',
			type: 'area',
			label: 'Gallery Item',
			options: {
				widgets: {
					'apostrophe-images': {
						limit: 1,
						size: 'full'
					},
					'apostrophe-video': {},
					'apostrophe-html': {}
				}
			}
		},
		{
			name: 'fullWidth',
			type: 'boolean',
			label: 'Full Width',
			def: true
		},
		{
			name: 'showDots',
			type: 'boolean',
			label: 'Show Dots',
			def: false
		},
	],
	arrangeFields: {

	},
	construct: function(self, options) {
  		var superPushAssets = self.pushAssets;
		
		self.pushAssets = function() {
			superPushAssets();
			self.pushAsset('stylesheet', 'slick');
			self.pushAsset('stylesheet', 'slick-theme');
			self.pushAsset('stylesheet', 'always');
			self.pushAsset('script', 'slick.min');
			self.pushAsset('script', 'always');
		}
	}
};