import { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { API } from "aws-amplify";
import cx from "classnames";
import Item from "./Item";
import ItemModal from "./ItemModal";
import { getCanvas, updateCanvas } from "../graphql";
import { Responsive, WidthProvider, Layouts } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);
import "../assets/css/react-grid-layout.css";
import "../assets/css/react-resizable.css";

// fix types
type Props = {
  canvasItems: any;
  setCanvasItems: (canvasItems: any) => void;
  activeCanvas: any;
  requestedModal: string | null;
  setRequestedModal: (requestedModal: string | null) => void;
};

const Canvas = ({
  canvasItems,
  setCanvasItems,
  activeCanvas,
  requestedModal,
  setRequestedModal,
}: Props) => {
  const [firstRender, setFirstRender] = useState(true);
  const [layouts, setLayouts] = useState<Layouts>();

  const [{ isOver }, drop] = useDrop({
    accept: "toolbarItem",
    drop: (item: any) => {
      setRequestedModal(item.type);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const createLayout = () => {
    const newLayouts: Layouts = {};
    const sizes = ["lg", "md", "sm", "xs", "xxs"];
    let y = 0;
    canvasItems.forEach((item: any) => {
      sizes.forEach((size) => {
        if (!newLayouts[size]) {
          newLayouts[size] = [];
        }
        newLayouts[size].push({
          i: item.id,
          x: 0,
          y: y,
          // TODO: way to calculate width and height based on content
          w: 2,
          h: 2,
        });
      });
      y += 2;
    });
    setLayouts(newLayouts);
  };

  const fetchSavedLayouts = async () => {
    const canvas: any = await API.graphql({
      query: getCanvas,
      variables: {
        id: activeCanvas.id,
      },
    });
    if (canvas.data.getCanvas.layouts) {
      setLayouts(JSON.parse(canvas.data.getCanvas.layouts));
    }
  };

  const persistLayouts = async (_layouts: Layouts) => {
    try {
      await API.graphql({
        query: updateCanvas,
        variables: {
          input: {
            id: activeCanvas.id,
            layouts: JSON.stringify(_layouts),
          },
        },
      });
      fetchSavedLayouts();
    } catch (err) {
      console.error("error updating canvas", err);
    }
  };

  useEffect(() => {
    fetchSavedLayouts();
    setFirstRender(false);
  }, []);

  return (
    <div
      ref={drop}
      className={cx(
        "h-[calc(100vh-6rem)] w-[calc(100vw-12rem)] p-7 overflow-y-auto overflow-x-hidden",
        "scrollbar-hide absolute top-24 left-48 bg-dark-jet",
        isOver && "outline-dashed outline-4 outline-green outline-offset-[-4px]"
      )}
    >
      <ResponsiveGridLayout
        layouts={layouts}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        margin={[15, 15]}
        onLayoutChange={(_layout, _layouts) => {
          !firstRender && persistLayouts(_layouts);
          // FIXME?: see if there is a way to work around having to do this on every layout change
          console.log("client: ", _layouts);
          console.log("server: ", JSON.parse(activeCanvas.layouts));
        }}
        // TODO: change resize handles dynamically based on item's position
        resizeHandles={["se"]}
      >
        {(canvasItems as any[]).map((item: any, idx: number) => (
          <div key={item.id}>
            <Item data={item} setRequestedModal={setRequestedModal} />
          </div>
        ))}
      </ResponsiveGridLayout>
      {requestedModal ? (
        <ItemModal
          requestedModal={requestedModal}
          activeCanvas={activeCanvas}
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}
          setRequestedModal={setRequestedModal}
        />
      ) : null}
    </div>
  );
};

export default Canvas;
