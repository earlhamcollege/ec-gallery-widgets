module.exports = {        
	extend: 'apostrophe-widgets',        
	label: 'EC Gallery',
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
		}
	],
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