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
					'ec-360': {}
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
		 self.beforeUpdate = function(req, piece, options, callback) {
		 	console.log(req,piece, options);
      // Even though we have a callback, we can still use promises.
      // We just have to invoke the callback at the end of the chain.
         if(piece.url && piece.url.includes('iframe')){
          var src = piece.url.split('src="')[1].split(/[ >]/)[0]
            piece.url = src.replace('"','');
        }
         return callback();
    };



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