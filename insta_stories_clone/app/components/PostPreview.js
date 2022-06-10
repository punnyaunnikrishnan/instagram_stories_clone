import { useWindowDimensions, View, Image, StyleSheet, FlatList } from 'react-native';
import React, { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const post = [
    {
        id: "1",
        postImage: "https://images.unsplash.com/photo-1653306638703-0e294f5b64fd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000",
    },
    {
        id: "2",
        postImage: "https://images.unsplash.com/photo-1653220973908-5ff0789d0a1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
    },
    {
        id: "3",
        postImage: "https://images.unsplash.com/photo-1653199898411-b93028f1a916?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
    },
]
const PostPreview = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const onViewableItemsChanged = useRef((item) => {
        const index = item.viewableItems[0].index
        setCurrentSlideIndex(index);
    });
    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    });

    return (
        <View><FlatList
            data={post}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Post postImage={item.
                postImage} />}
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={viewabilityConfig.current}
        />
            <View style={{ position: 'relative', }}>
                <Actions />
                <View style={{...StyleSheet.absoluteFillObject,//sets everything to zero top,bottom,right,left
                    position: 'absolute',
                     flexDirection: 'row', 
                     alignItems: 'center',
                    justifyContent:"center",
                    // backgroundColor: "lightblue",
                    // top: 0,
                    // left: 0,
                    // bottom: 0,
                    // right: 0,
                    zIndex:-1,
                }} >
{post.map((item, index) => {
                        return <View key={item.id} style={{
                            width: 6, height: 6,
                            borderRadius: 3, backgroundColor: currentSlideIndex === index ? '#6167F6' : '#D3D4DA',marginHorizontal:2,
                        }} />

                    })}


                </View>
            </View>
        </View>
    );
};

// const {width}=Dimensions.get('window')
const Post = ({ postImage }) => {
    const { width } = useWindowDimensions();
    const postDim = width - 20;
    return (<View style={styles.container}>
        <Image source={{
            uri: postImage,
        }}
            style={{ width: postDim, height: postDim }}
        />

    </View>

    );
};
const Actions = () => {
    return (
        <View style={styles.actionWrapper}>
            <View style={styles.actionContainer}>
                <AntDesign style= {{ marginRight: 15 }} name="hearto" size={24} color="black" />
                <AntDesign style={{ marginRight: 15 }} name="message1" size={24} color="black" />
                <Feather style={{ marginRight: 15 }} name="send" size={24} color="black" />
            </View>
            <Feather style={{ marginRight: 15 }} name="bookmark" size={24} color="black" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    actionWrapper: {
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    actionContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
});

export default PostPreview;